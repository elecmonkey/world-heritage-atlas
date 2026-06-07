import { spawn } from 'node:child_process'
import { mkdir, writeFile, readdir, access, rm } from 'node:fs/promises'
import { constants } from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { fileURLToPath } from 'node:url'
import CDP from 'chrome-remote-interface'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'

import { buildSrt, totalDuration, tourScript } from './tour-script.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../..')
const runningDir = path.resolve(__dirname, '..')
const outDir = process.env.WHA_TOUR_OUT_DIR
  ? path.resolve(process.env.WHA_TOUR_OUT_DIR)
  : path.join('/private/tmp', 'world-heritage-atlas-tour')
const framesDir = path.join(outDir, 'frames')
const chromeProfileDir = path.join('/private/tmp', 'world-heritage-atlas-tour-chrome-profile')
const srtPath = path.join(outDir, 'tour-script.srt')
const scriptPath = path.join(outDir, 'tour-script.txt')
const videoPath = path.join(outDir, 'world-heritage-atlas-tour.mp4')

const args = new Set(process.argv.slice(2))
const renderVideo = args.has('--render-video')
const fps = Number(process.env.WHA_TOUR_FPS ?? 12)
const width = Number(process.env.WHA_TOUR_WIDTH ?? 1440)
const height = Number(process.env.WHA_TOUR_HEIGHT ?? 900)
const port = Number(process.env.WHA_TOUR_PORT ?? 7010)
const chromePort = Number(process.env.WHA_CHROME_PORT ?? 9222)

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

async function main() {
  await mkdir(outDir, { recursive: true })
  await rm(framesDir, { recursive: true, force: true })
  await mkdir(framesDir, { recursive: true })
  await writeFile(srtPath, buildSrt(), 'utf8')
  await writeFile(scriptPath, formatReadableScript(), 'utf8')

  await runCommand('pnpm', ['build'], rootDir)

  const previewServer = spawn('pnpm', ['preview', '--host', '127.0.0.1'], {
    cwd: rootDir,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, BROWSER: 'none' },
  })
  pipeChild(previewServer, 'preview')

  let chrome
  let client
  try {
    await waitForHttp(`http://127.0.0.1:${port}`, 90_000)
    const chromePath = await findChrome()
    chrome = spawn(chromePath, [
      `--remote-debugging-port=${chromePort}`,
      '--headless=new',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-default-browser-check',
      `--window-size=${width},${height}`,
      `--user-data-dir=${chromeProfileDir}`,
      'about:blank',
    ], { stdio: ['ignore', 'pipe', 'pipe'] })
    pipeChild(chrome, 'chrome')

    await waitForHttp(`http://127.0.0.1:${chromePort}/json/version`, 30_000)
    const targets = await CDP.List({ port: chromePort })
    const target = targets.find((item) => item.type === 'page') ?? targets[0]
    client = await CDP({ port: chromePort, target })
    await setupPage(client)
    await runTour(client)
  } finally {
    if (client) {
      await client.close().catch(() => {})
    }
    if (chrome) {
      chrome.kill('SIGTERM')
    }
    previewServer.kill('SIGTERM')
  }

  if (renderVideo) {
    await renderWithFfmpeg()
  } else {
    console.log(`Captured frames: ${framesDir}`)
    console.log(`Subtitle script: ${srtPath}`)
    console.log('Run `pnpm --dir running make-video` to render MP4 when ffmpeg is available.')
  }
}

async function setupPage(client) {
  const { Page, Runtime, Emulation, DOM } = client
  await Promise.all([Page.enable(), Runtime.enable(), DOM.enable()])
  await Emulation.setDeviceMetricsOverride({
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false,
  })
  await Page.navigate({ url: `http://127.0.0.1:${port}` })
  await Page.loadEventFired()
  await waitForRuntime(client, 'window.__WHA_TOUR__ && window.__WHA_TOUR__.getSnapshot().total > 0')
  await Runtime.evaluate({
    expression: overlayBootstrap(),
    awaitPromise: true,
  })
}

async function runTour(client) {
  let frameIndex = 1
  for (const [index, step] of tourScript.entries()) {
    console.log(`Step ${index + 1}/${tourScript.length}: ${step.title}`)
    await setOverlay(client, step, index)
    await sleep(250)
    await performAction(client, step.action, async (seconds = 0.35) => {
      frameIndex = await captureFor(client, frameIndex, seconds)
    })
    await sleep(200)
    const count = Math.max(1, Math.round(step.duration * fps))
    for (let i = 0; i < count; i += 1) {
      await captureFrame(client, frameIndex++)
      await sleep(1000 / fps)
    }
  }
  console.log(`Tour duration: ${totalDuration()}s, frames: ${frameIndex - 1}, fps: ${fps}`)
}

async function performAction(client, action, capture = async () => {}) {
  const { Runtime } = client
  if (!action) return

  if (action.closeDetail) {
    await evaluate(client, 'window.__WHA_TOUR__.closeDetail()')
    await capture(0.35)
  }

  if (action.scroll === 'top') {
    await animatedScroll(client, 0)
    await capture(0.5)
  }
  if (action.scroll === 'analytics') {
    await evaluate(client, 'window.__WHA_TOUR__.closeDetail()')
    await animatedScrollToSelector(client, '[data-tour=analytics]', 'start')
    await capture(0.9)
  }

  switch (action.type) {
    case 'reset':
      await evaluate(client, 'window.__WHA_TOUR__.reset()')
      await capture(0.45)
      break
    case 'focus':
      await animatedScrollToSelector(client, action.selector, 'center')
      await capture(0.7)
      break
    case 'region':
      await showPointer(client, '筛选区域', 'left')
      await capture(0.35)
      await evaluate(client, `window.__WHA_TOUR__.focusRegion(${JSON.stringify(action.value)})`)
      await pulseFilterValue(client, action.value)
      await capture(0.7)
      break
    case 'country':
      await showPointer(client, '点击国家排行：中国', 'chart')
      await capture(0.35)
      await evaluate(client, `window.__WHA_TOUR__.focusCountry(${JSON.stringify(action.value)})`)
      await pulseFilterValue(client, action.value)
      await capture(0.7)
      break
    case 'category':
      await showPointer(client, '点击类别环图：文化', 'chart')
      await capture(0.35)
      await evaluate(client, `window.__WHA_TOUR__.focusCategory(${JSON.stringify(action.value)})`)
      await capture(0.7)
      break
    case 'year':
      await showPointer(client, `点击 ${Number(action.value)} 年柱形`, 'chart')
      await capture(0.35)
      await evaluate(client, `window.__WHA_TOUR__.setFilter({ yearRange: [${Number(action.value)}, ${Number(action.value)}] })`)
      await capture(0.7)
      break
    case 'keyword':
      await showPointer(client, `输入关键词：${action.value}`, 'left')
      await capture(0.35)
      await evaluate(client, `window.__WHA_TOUR__.setFilter({ keyword: ${JSON.stringify(action.value)} })`)
      await capture(0.8)
      await evaluate(client, `window.__WHA_TOUR__.selectSiteByName(${JSON.stringify(action.value)}) || window.__WHA_TOUR__.selectFirstVisibleSite()`)
      await capture(0.7)
      break
    case 'site':
      await showPointer(client, `打开详情：${action.value}`, 'map')
      await capture(0.35)
      await evaluate(client, `window.__WHA_TOUR__.selectSiteByName(${JSON.stringify(action.value)}) || window.__WHA_TOUR__.selectFirstVisibleSite()`)
      await capture(0.7)
      break
  }

  await Runtime.evaluate({ expression: 'new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))', awaitPromise: true })
}

async function captureFor(client, frameIndex, seconds) {
  const frames = Math.max(1, Math.round(seconds * fps))
  for (let i = 0; i < frames; i += 1) {
    await captureFrame(client, frameIndex++)
    await sleep(1000 / fps)
  }
  return frameIndex
}

async function animatedScroll(client, top) {
  await evaluate(client, `window.scrollTo({ top: ${Number(top)}, behavior: "smooth" })`)
}

async function animatedScrollToSelector(client, selector, block = 'start') {
  await evaluate(client, `document.querySelector(${JSON.stringify(selector)})?.scrollIntoView({ behavior: "smooth", block: ${JSON.stringify(block)} })`)
}

async function pulseFilterValue(client, value) {
  await evaluate(client, `window.__WHA_OVERLAY__.pulseText(${JSON.stringify(value)})`)
}

async function showPointer(client, label, zone) {
  await evaluate(client, `window.__WHA_OVERLAY__.pointer(${JSON.stringify({ label, zone })})`)
}

async function setOverlay(client, step, index) {
  await evaluate(client, `window.__WHA_OVERLAY__.set(${JSON.stringify({
    index: index + 1,
    total: tourScript.length,
    title: step.title,
    narration: step.narration,
  })})`)
}

async function captureFrame(client, index) {
  const { Page } = client
  const result = await Page.captureScreenshot({ format: 'png', fromSurface: true })
  const name = `frame-${String(index).padStart(5, '0')}.png`
  await writeFile(path.join(framesDir, name), Buffer.from(result.data, 'base64'))
}

async function renderWithFfmpeg() {
  const ffmpeg = await findOnPath('ffmpeg') ?? ffmpegInstaller.path
  if (!ffmpeg) {
    console.warn('ffmpeg was not found. Frames and SRT were generated instead.')
    console.warn(`Frames: ${framesDir}`)
    console.warn(`SRT: ${srtPath}`)
    return
  }
  const ffmpegArgs = [
    '-y',
    '-framerate', String(fps),
    '-i', path.join(framesDir, 'frame-%05d.png'),
    '-r', String(fps),
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    videoPath,
  ]

  // The browser overlay already embeds the Chinese narration into every frame.
  // Keep the SRT file as a separate artifact, and only burn it in when explicitly
  // requested to avoid missing-font boxes on machines without CJK subtitle fonts.
  if (process.env.WHA_TOUR_BURN_SRT === '1') {
    ffmpegArgs.splice(
      5,
      0,
      '-vf',
      `subtitles=${escapeFilterPath(srtPath)}:force_style='FontName=PingFang SC,FontSize=18,PrimaryColour=&H00FFFFFF,OutlineColour=&HAA000000,BorderStyle=3,Outline=1,Shadow=0,Alignment=2,MarginV=28'`,
    )
  }

  await runCommand(ffmpeg, ffmpegArgs, rootDir)
  console.log(`Video: ${videoPath}`)
}

function overlayBootstrap() {
  return `(() => {
    const existing = document.getElementById('wha-video-overlay');
    if (existing) existing.remove();
    const style = document.createElement('style');
    style.id = 'wha-video-overlay-style';
    style.textContent = ` + JSON.stringify(`
      #wha-video-overlay { position: fixed; left: 32px; right: 32px; bottom: 28px; z-index: 5000; display: grid; grid-template-columns: auto 1fr; gap: 16px; align-items: start; padding: 18px 22px; color: #f8fafc; background: linear-gradient(135deg, rgba(11,15,26,.94), rgba(17,24,39,.88)); border: 1px solid rgba(200,169,106,.42); box-shadow: 0 22px 60px rgba(0,0,0,.42); backdrop-filter: blur(10px); font-family: 'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif; }
      #wha-video-overlay .badge { display: inline-flex; min-width: 74px; justify-content: center; border: 1px solid rgba(200,169,106,.5); padding: 7px 10px; color: #c8a96a; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; }
      #wha-video-overlay h2 { margin: 0 0 8px; color: #f3e7c7; font-size: 22px; letter-spacing: .06em; }
      #wha-video-overlay p { margin: 0; max-width: 1120px; color: #dbe4ef; font-size: 16px; line-height: 1.75; }
      #wha-video-overlay .progress { grid-column: 1 / -1; height: 3px; background: rgba(255,255,255,.12); overflow: hidden; }
      #wha-video-overlay .bar { height: 100%; background: #c8a96a; transition: width .4s ease; }
      #wha-video-pointer { position: fixed; z-index: 4999; display: flex; align-items: center; gap: 10px; color: #0b0f1a; background: #f3e7c7; border: 1px solid #c8a96a; box-shadow: 0 12px 35px rgba(0,0,0,.38); padding: 8px 12px; font-size: 14px; font-weight: 700; opacity: 0; transform: translateY(8px); transition: all .22s ease; pointer-events: none; }
      #wha-video-pointer::before { content: ''; width: 13px; height: 13px; border-radius: 999px; background: #f59e0b; box-shadow: 0 0 0 8px rgba(245,158,11,.22); }
      #wha-video-pointer.is-visible { opacity: 1; transform: translateY(0); }
      .wha-pulse-text { outline: 2px solid #f3e7c7 !important; outline-offset: 4px !important; box-shadow: 0 0 0 8px rgba(200,169,106,.22) !important; transition: box-shadow .25s ease, outline-color .25s ease; }
    `) + `;
    document.head.appendChild(style);
    const overlay = document.createElement('div');
    overlay.id = 'wha-video-overlay';
    overlay.innerHTML = '<div class="badge"></div><div><h2></h2><p></p></div><div class="progress"><div class="bar"></div></div>';
    document.body.appendChild(overlay);
    const pointer = document.createElement('div');
    pointer.id = 'wha-video-pointer';
    document.body.appendChild(pointer);
    const zones = {
      left: { left: '70px', top: '310px' },
      map: { left: '690px', top: '385px' },
      chart: { left: '600px', top: '390px' },
    };
    window.__WHA_OVERLAY__ = {
      set(data) {
        overlay.querySelector('.badge').textContent = 'STEP ' + String(data.index).padStart(2, '0');
        overlay.querySelector('h2').textContent = data.title;
        overlay.querySelector('p').textContent = data.narration;
        overlay.querySelector('.bar').style.width = Math.round((data.index / data.total) * 100) + '%';
      },
      pointer(data) {
        const pos = zones[data.zone] || zones.map;
        pointer.textContent = data.label;
        pointer.style.left = pos.left;
        pointer.style.top = pos.top;
        pointer.classList.add('is-visible');
        clearTimeout(pointer.__hideTimer);
        pointer.__hideTimer = setTimeout(() => pointer.classList.remove('is-visible'), 1400);
      },
      pulseText(value) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let target = null;
        while (walker.nextNode()) {
          const node = walker.currentNode;
          if (node.nodeValue && node.nodeValue.includes(value)) {
            target = node.parentElement;
            break;
          }
        }
        if (!target) return;
        target.classList.add('wha-pulse-text');
        setTimeout(() => target.classList.remove('wha-pulse-text'), 1300);
      }
    };
  })()`
}

async function evaluate(client, expression) {
  const result = await client.Runtime.evaluate({ expression, awaitPromise: true })
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text || 'Runtime evaluation failed')
  }
  return result.result
}

async function waitForRuntime(client, expression, timeout = 30_000) {
  const started = Date.now()
  while (Date.now() - started < timeout) {
    const result = await client.Runtime.evaluate({ expression: `Boolean(${expression})` })
    if (result.result?.value) return
    await sleep(250)
  }
  throw new Error(`Timed out waiting for runtime expression: ${expression}`)
}

async function waitForHttp(url, timeout = 30_000) {
  const started = Date.now()
  while (Date.now() - started < timeout) {
    try {
      await request(url)
      return
    } catch {
      await sleep(500)
    }
  }
  throw new Error(`Timed out waiting for ${url}`)
}

function request(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      res.resume()
      if (res.statusCode && res.statusCode < 500) resolve()
      else reject(new Error(`HTTP ${res.statusCode}`))
    })
    req.on('error', reject)
    req.setTimeout(3000, () => req.destroy(new Error('timeout')))
  })
}

async function findChrome() {
  const envChrome = process.env.CHROME_PATH
  const candidates = [
    envChrome,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Users/bytedance/Library/Caches/ms-playwright/chromium-1223/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
    '/Users/bytedance/Library/Caches/ms-playwright/chromium-1208/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
    '/Users/bytedance/Library/Caches/ms-playwright/chromium-1045/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
    await findOnPath('chromium'),
    await findOnPath('google-chrome'),
  ].filter(Boolean)

  for (const item of candidates) {
    try {
      await access(item, constants.X_OK)
      return item
    } catch {
      // Try the next known browser path.
    }
  }
  throw new Error('No Chrome/Chromium executable found. Set CHROME_PATH to a browser executable.')
}

async function findOnPath(bin) {
  const paths = (process.env.PATH ?? '').split(path.delimiter)
  for (const dir of paths) {
    const candidate = path.join(dir, bin)
    try {
      await access(candidate, constants.X_OK)
      return candidate
    } catch {
      // Try the next PATH entry.
    }
  }
  return null
}

function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: 'inherit' })
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}`)))
    child.on('error', reject)
  })
}

function pipeChild(child, label) {
  child.stdout?.on('data', (chunk) => {
    const text = String(chunk).trim()
    if (text) console.log(`[${label}] ${text}`)
  })
  child.stderr?.on('data', (chunk) => {
    const text = String(chunk).trim()
    if (text) console.error(`[${label}] ${text}`)
  })
}

function escapeFilterPath(value) {
  return value.replace(/\\/g, '\\\\').replace(/:/g, '\\:').replace(/'/g, "\\'")
}

function formatReadableScript() {
  return tourScript.map((item, index) => `${index + 1}. ${item.title} (${item.duration}s)\n${item.narration}\n`).join('\n')
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
