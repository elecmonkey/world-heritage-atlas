import { tourScript, totalDuration } from '../src/tour-script.mjs'

console.log(`World Heritage Atlas 展示脚本，总时长约 ${totalDuration()} 秒。\n`)
for (const [index, item] of tourScript.entries()) {
  console.log(`${index + 1}. ${item.title}（${item.duration}s）`)
  console.log(item.narration)
  console.log('')
}
