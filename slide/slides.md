---
theme: default
title: World Heritage Atlas 数据可视化产品设计汇报
info: |
  面向世界遗产探索的数据可视化产品设计、体验诊断与迭代方案。
drawings:
  persist: false
transition: slide-left
mdc: true
canvasWidth: 1280
aspectRatio: 16/9
layout: full
fonts:
  sans: 'Inter, Noto Sans SC, PingFang SC, Microsoft YaHei'
  serif: 'Noto Serif SC, Georgia'
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(200,169,106,.18),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(56,189,248,.12),transparent_26%),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[length:auto,auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 flex h-full flex-col justify-center">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">World Heritage Atlas · Product Design Review</p>
    <h1 class="mt-8 font-serif text-[78px] font-black leading-[0.98] tracking-[-0.05em]">
      <span class="block">从地图浏览</span>
      <span class="block text-[#c8a96a]">到数据洞察</span>
    </h1>
    <p class="mt-7 max-w-[800px] text-[22px] leading-9 text-slate-300">世界遗产可视化系统：用户需求、信息架构与可视化体验升级方案</p>
    <div class="mt-11 grid w-[920px] grid-cols-4 gap-4">
      <div class="border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"><b class="block font-serif text-3xl text-white">1081</b><span class="text-sm text-slate-400">遗产点</span></div>
      <div class="border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"><b class="block font-serif text-3xl text-white">185</b><span class="text-sm text-slate-400">国家/地区</span></div>
      <div class="border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"><b class="block font-serif text-3xl text-white">5</b><span class="text-sm text-slate-400">UNESCO 区域</span></div>
      <div class="border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"><b class="block font-serif text-3xl text-white">1978–2025</b><span class="text-sm text-slate-400">时间跨度</span></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(200,169,106,.14),transparent_30%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">01 · Product Question</p>
    <h1 class="mt-3 max-w-[1060px] font-serif text-[42px] font-bold leading-tight tracking-[-0.035em]">用户真正想解决的不是“看点位”，而是“理解世界遗产格局”</h1>
    <div class="mt-9 grid grid-cols-3 gap-5">
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">探索型用户</p>
        <h2 class="mt-4 font-serif text-[27px] text-white">某个国家/区域有什么？</h2>
        <p class="mt-4 text-base leading-8 text-slate-300">需要快速定位空间分布、筛选类别、打开详情，并保持地图上下文不断裂。</p>
      </div>
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">研究/教学用户</p>
        <h2 class="mt-4 font-serif text-[27px] text-white">结构和趋势如何变化？</h2>
        <p class="mt-4 text-base leading-8 text-slate-300">需要把时间、地区、类别、国家排名组织成可比较、可解释的图表系统。</p>
      </div>
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">内容传播用户</p>
        <h2 class="mt-4 font-serif text-[27px] text-white">哪些结论值得讲？</h2>
        <p class="mt-4 text-base leading-8 text-slate-300">需要自动浮现异常、Top 国家、区域差异与代表性遗产，形成叙事线索。</p>
      </div>
    </div>
    <div class="mt-8 border-l-4 border-[#c8a96a] bg-[#c8a96a]/10 px-7 py-5 font-serif text-2xl text-white">设计目标：把“地图工具”升级成“可探索的数据叙事仪表盘”。</div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(56,189,248,.13),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">02 · Data Assets</p>
    <h1 class="mt-3 max-w-[1040px] font-serif text-4xl font-bold leading-tight tracking-[-0.03em]">当前数据已经足够支撑专业可视化，但需要更清晰的阅读层级</h1>
    <div class="mt-8 grid grid-cols-[1.05fr_1.4fr_1fr] gap-5">
      <div class="flex min-h-[430px] flex-col justify-center rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <p class="text-slate-400">当前数据集</p>
        <b class="mt-4 block font-serif text-[92px] leading-none text-white">1081</b>
        <span class="mt-2 text-slate-400">World Heritage Sites</span>
      </div>
      <div class="flex min-h-[430px] flex-col justify-center gap-6 rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <div class="grid grid-cols-[96px_1fr_52px] items-center gap-3"><span>文化遗产</span><div class="h-3.5 overflow-hidden rounded-full bg-white/10"><i class="block h-full w-[78.1%] rounded-full bg-[#f59e0b]"></i></div><b class="text-[#f59e0b]">844</b></div>
        <div class="grid grid-cols-[96px_1fr_52px] items-center gap-3"><span>自然遗产</span><div class="h-3.5 overflow-hidden rounded-full bg-white/10"><i class="block h-full w-[18.6%] rounded-full bg-[#10b981]"></i></div><b class="text-[#10b981]">201</b></div>
        <div class="grid grid-cols-[96px_1fr_52px] items-center gap-3"><span>混合遗产</span><div class="h-3.5 overflow-hidden rounded-full bg-white/10"><i class="block h-full w-[3.3%] rounded-full bg-[#8b5cf6]"></i></div><b class="text-[#8b5cf6]">36</b></div>
        <p class="mt-2 text-sm leading-7 text-slate-400">类别颜色应贯穿地图、图表、筛选与详情，减少认知切换。</p>
      </div>
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <h3 class="font-serif text-2xl text-white">区域规模</h3>
        <div class="mt-5 space-y-1 text-[15px]">
          <div class="flex justify-between border-b border-white/10 py-3 text-slate-300"><span>Europe–North America</span><b class="text-[#c8a96a]">506</b></div>
          <div class="flex justify-between border-b border-white/10 py-3 text-slate-300"><span>Asia–Pacific</span><b class="text-[#c8a96a]">260</b></div>
          <div class="flex justify-between border-b border-white/10 py-3 text-slate-300"><span>Latin America–Caribbean</span><b class="text-[#c8a96a]">140</b></div>
          <div class="flex justify-between border-b border-white/10 py-3 text-slate-300"><span>Africa</span><b class="text-[#c8a96a]">92</b></div>
          <div class="flex justify-between py-3 text-slate-300"><span>Arab States</span><b class="text-[#c8a96a]">83</b></div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,169,106,.14),transparent_30%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">03 · Diagnosis</p>
    <h1 class="mt-3 max-w-[1070px] font-serif text-[42px] font-bold leading-tight tracking-[-0.035em]">现状问题：可视化组件齐全，但“洞察优先级”和“空间上下文”不够稳定</h1>
    <div class="mt-9 grid grid-cols-3 gap-5">
      <div class="rounded-[22px] border border-emerald-400/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <h2 class="font-serif text-[27px] text-white">已经做对的</h2>
        <ul class="mt-5 list-disc space-y-4 pl-5 leading-7 text-slate-300">
          <li>地图聚类承载全局空间分布。</li>
          <li>筛选器支持时间、类别、区域、国家、关键词。</li>
          <li>ECharts 图表覆盖趋势、结构、排名、层级。</li>
        </ul>
      </div>
      <div class="rounded-[22px] border border-amber-400/35 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <h2 class="font-serif text-[27px] text-white">需要修正的</h2>
        <ul class="mt-5 list-disc space-y-4 pl-5 leading-7 text-slate-300">
          <li>详情弹层打开时遮罩/布局变化会让地图产生刷新感。</li>
          <li>年份范围固定到 2024，与数据中的 2025 不一致。</li>
          <li>国家排名只显示总量，无法看类别构成。</li>
        </ul>
      </div>
      <div class="rounded-[22px] border border-sky-400/35 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <h2 class="font-serif text-[27px] text-white">本轮改进策略</h2>
        <ul class="mt-5 list-disc space-y-4 pl-5 leading-7 text-slate-300">
          <li>KPI 前置，先给总览再探索。</li>
          <li>详情改为非模态侧滑，保持地图上下文。</li>
          <li>排名图改为类别堆叠，增强比较维度。</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(56,189,248,.12),transparent_30%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">04 · Visualization Principles</p>
    <h1 class="mt-3 max-w-[1040px] font-serif text-4xl font-bold leading-tight tracking-[-0.03em]">采用“总览 → 缩放筛选 → 细节证据”的经典信息可视化路径</h1>
    <div class="mt-10 grid grid-cols-[1fr_70px_1fr_70px_1fr] items-center gap-2">
      <div class="min-h-[150px] rounded-[20px] border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-xl"><b class="block font-serif text-[28px] text-[#c8a96a]">Overview</b><span class="mt-3 block leading-7 text-slate-300">KPI + 世界地图先建立全局尺度</span></div>
      <div class="text-center text-4xl text-sky-400">→</div>
      <div class="min-h-[150px] rounded-[20px] border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-xl"><b class="block font-serif text-[28px] text-[#c8a96a]">Zoom & Filter</b><span class="mt-3 block leading-7 text-slate-300">筛选器、图表点击、国家聚焦形成联动探索</span></div>
      <div class="text-center text-4xl text-sky-400">→</div>
      <div class="min-h-[150px] rounded-[20px] border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-xl"><b class="block font-serif text-[28px] text-[#c8a96a]">Details</b><span class="mt-3 block leading-7 text-slate-300">详情侧栏作为证据层，不抢夺地图上下文</span></div>
    </div>
    <div class="mt-8 grid grid-cols-4 overflow-hidden rounded-[22px] border border-white/10 bg-[#111827]/80 backdrop-blur-xl">
      <div class="border-r border-white/10 p-6"><span class="block text-sm text-slate-400">空间问题</span><b class="mt-3 block text-lg text-white">地图 / 聚类 / Choropleth</b></div>
      <div class="border-r border-white/10 p-6"><span class="block text-sm text-slate-400">排序问题</span><b class="mt-3 block text-lg text-white">条形图优先于饼图</b></div>
      <div class="border-r border-white/10 p-6"><span class="block text-sm text-slate-400">结构问题</span><b class="mt-3 block text-lg text-white">堆叠条形 + 统一颜色</b></div>
      <div class="p-6"><span class="block text-sm text-slate-400">时间问题</span><b class="mt-3 block text-lg text-white">年度趋势 + 累计曲线</b></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_82%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">05 · Information Architecture</p>
    <h1 class="mt-3 max-w-[1080px] font-serif text-4xl font-bold leading-tight tracking-[-0.03em]">新版仪表盘的信息层级：先回答“多少”，再回答“在哪、为何、与谁相比”</h1>
    <div class="mt-8 grid gap-3 rounded-[24px] border border-white/10 bg-[#111827]/60 p-5 backdrop-blur-xl">
      <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-4 uppercase tracking-[0.16em] text-[#c8a96a]">Header · 数据范围与产品身份</div>
      <div class="grid grid-cols-4 gap-3">
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">遗产总量</div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">覆盖国家</div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">最早年份</div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">文化占比</div>
      </div>
      <div class="grid min-h-[230px] grid-cols-[290px_1fr] gap-3">
        <div class="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] font-serif text-2xl text-white">Filter Panel<span class="mt-3 font-sans text-sm text-slate-400">年份 / 类别 / 区域 / 国家 / 搜索</span></div>
        <div class="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] font-serif text-2xl text-white">Atlas Map<span class="mt-3 font-sans text-sm text-slate-400">聚类、图例、国家聚焦、详情侧栏</span></div>
      </div>
      <div class="grid grid-cols-4 gap-3 text-slate-300">
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">时间趋势</div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">类别占比</div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">国家堆叠排名</div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">区域结构</div>
      </div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_76%,rgba(56,189,248,.12),transparent_26%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">06 · UX Fix</p>
    <h1 class="mt-3 max-w-[1020px] font-serif text-[42px] font-bold leading-tight tracking-[-0.035em]">详情面板必须是“证据层”，而不是打断探索的“弹窗层”</h1>
    <div class="mt-8 grid grid-cols-2 gap-5">
      <div class="rounded-[22px] border border-red-400/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Before</p>
        <h2 class="mt-4 font-serif text-[27px] text-white">模态 Dialog + Overlay</h2>
        <p class="mt-4 leading-8 text-slate-300">遮罩会改变用户注意力和交互目标；地图容器可能因为焦点、滚动或尺寸计算产生“刷新感”。</p>
      </div>
      <div class="rounded-[22px] border border-emerald-400/35 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">After</p>
        <h2 class="mt-4 font-serif text-[27px] text-white">非模态固定侧栏</h2>
        <p class="mt-4 leading-8 text-slate-300">右侧信息层覆盖但不改变地图布局；关闭前仍保持选中 marker、当前缩放和空间上下文。</p>
      </div>
    </div>
    <div class="mt-6 grid h-[220px] grid-cols-[1fr_330px] gap-4">
      <div class="flex items-center justify-center rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_35%_48%,rgba(245,158,11,.55)_0_5px,transparent_6px),radial-gradient(circle_at_66%_40%,rgba(16,185,129,.55)_0_5px,transparent_6px),rgba(15,23,42,.62)] text-slate-300">Map context preserved</div>
      <div class="flex flex-col items-start justify-center rounded-[22px] border border-white/10 bg-[#0b0f1a]/95 p-7"><b class="font-serif text-2xl text-[#c8a96a]">Detail</b><span class="mt-4 leading-8 text-slate-300">Site / Country / Criteria / Description</span></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(200,169,106,.14),transparent_30%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">07 · Data-viz Upgrades</p>
    <h1 class="mt-3 max-w-[1020px] font-serif text-4xl font-bold leading-tight tracking-[-0.03em]">让图表从“展示统计”升级为“辅助判断”</h1>
    <div class="mt-10 grid grid-cols-4 gap-5">
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><b class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c8a96a]/15 text-[#c8a96a]">01</b><h2 class="mt-7 font-serif text-2xl text-white">KPI 前置</h2><p class="mt-4 leading-7 text-slate-300">用户先知道当前筛选下的总量、覆盖国家、最早年份和文化占比。</p></div>
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><b class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c8a96a]/15 text-[#c8a96a]">02</b><h2 class="mt-7 font-serif text-2xl text-white">国家堆叠排名</h2><p class="mt-4 leading-7 text-slate-300">Top 国家不仅看总量，还看文化/自然/混合的构成差异。</p></div>
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><b class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c8a96a]/15 text-[#c8a96a]">03</b><h2 class="mt-7 font-serif text-2xl text-white">联动状态显性化</h2><p class="mt-4 leading-7 text-slate-300">把年份、区域、国家、类别作为阅读上下文展示，避免图表误读。</p></div>
      <div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><b class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c8a96a]/15 text-[#c8a96a]">04</b><h2 class="mt-7 font-serif text-2xl text-white">下一步：标准化指标</h2><p class="mt-4 leading-7 text-slate-300">加入占比、累计曲线、区域均值、Choropleth，支持更严谨的比较。</p></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(139,92,246,.13),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">08 · Product Roadmap</p>
    <h1 class="mt-3 max-w-[1000px] font-serif text-4xl font-bold leading-tight tracking-[-0.03em]">面向专业数据产品的三阶段演进</h1>
    <div class="mt-10 grid grid-cols-3 gap-6">
      <div class="min-h-[340px] rounded-[28px] border border-[#c8a96a]/35 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl"><span class="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a96a]">Now</span><h2 class="mt-24 font-serif text-[28px] text-white">探索体验稳定</h2><p class="mt-4 leading-8 text-slate-300">KPI、2025 数据范围、非模态详情、堆叠排名、图表说明。</p></div>
      <div class="min-h-[340px] rounded-[28px] border border-sky-400/30 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl"><span class="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a96a]">Next</span><h2 class="mt-24 font-serif text-[28px] text-white">洞察自动化</h2><p class="mt-4 leading-8 text-slate-300">自动生成“当前视图洞察”：最高区域、增长年份、类别异常、代表国家。</p></div>
      <div class="min-h-[340px] rounded-[28px] border border-violet-400/30 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl"><span class="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a96a]">Later</span><h2 class="mt-24 font-serif text-[28px] text-white">专题叙事</h2><p class="mt-4 leading-8 text-slate-300">文化线路、濒危遗产、跨国遗产、区域不均衡专题故事与导出报告。</p></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0b0f1a] px-16 py-14 text-center text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,.16),transparent_34%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 max-w-[980px]">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Conclusion</p>
    <h1 class="mt-5 font-serif text-5xl font-bold leading-tight tracking-[-0.035em]">一个好的数据可视化产品，核心不是图表数量，而是让用户更快形成可靠判断。</h1>
    <div class="mt-10 flex flex-wrap justify-center gap-3">
      <span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">空间上下文稳定</span>
      <span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">视觉编码一致</span>
      <span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">比较方式正确</span>
      <span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">洞察路径清晰</span>
    </div>
  </div>
</div>
