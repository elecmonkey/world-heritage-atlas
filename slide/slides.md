---
theme: default
title: 世界文化遗产的时空分布与类型演变
info: |
  基于 World Heritage Atlas 当前产品的数据可视化系统设计汇报。
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
  <div class="absolute -left-24 bottom-[-180px] h-[390px] w-[390px] rounded-full bg-[#c8a96a]/20 blur-2xl"></div>
  <div class="relative z-10 flex h-full flex-col justify-center">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">World Heritage Atlas · Data Visualization System</p>
    <h1 class="mt-8 font-serif text-[72px] font-black leading-[0.98] tracking-[-0.05em]"><span class="block">世界文化遗产的</span><span class="block text-[#c8a96a]">时空分布与类型演变</span></h1>
    <p class="mt-7 max-w-[780px] text-[22px] leading-9 text-slate-300">历史数据可视化系统设计方案：从世界遗产名录到可探索、可比较、可讲述的地图仪表盘</p>
    <div class="mt-10 grid w-[940px] grid-cols-4 gap-4">
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
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(56,189,248,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 flex h-full flex-col justify-center">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Agenda</p>
    <h1 class="mt-4 font-serif text-[52px] font-bold tracking-[-0.04em]">汇报结构</h1>
    <div class="mt-10 grid grid-cols-4 gap-5">
      <div class="min-h-[330px] rounded-[28px] border border-[#c8a96a]/35 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><span class="font-serif text-6xl text-[#c8a96a]">01</span><h2 class="mt-16 font-serif text-3xl text-white">研究背景</h2><p class="mt-4 leading-8 text-slate-300">为什么世界遗产适合做时空可视化，以及目标用户真正需要什么。</p></div>
      <div class="min-h-[330px] rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><span class="font-serif text-6xl text-[#c8a96a]">02</span><h2 class="mt-16 font-serif text-3xl text-white">相关数据</h2><p class="mt-4 leading-8 text-slate-300">UNESCO 名录字段、清洗结构、统计表与可视化映射。</p></div>
      <div class="min-h-[330px] rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><span class="font-serif text-6xl text-[#c8a96a]">03</span><h2 class="mt-16 font-serif text-3xl text-white">UI 设计</h2><p class="mt-4 leading-8 text-slate-300">地图优先仪表盘、统一视觉语言、筛选联动与详情侧栏。</p></div>
      <div class="min-h-[330px] rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><span class="font-serif text-6xl text-[#c8a96a]">04</span><h2 class="mt-16 font-serif text-3xl text-white">系统架构</h2><p class="mt-4 leading-8 text-slate-300">数据模型、可视化模块、交互联动与体验优化。</p></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,.17),transparent_34%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 text-center"><p class="text-xs font-bold uppercase tracking-[0.3em] text-[#c8a96a]">Part 01</p><h1 class="mt-6 font-serif text-[78px] font-black tracking-[-0.06em]">研究背景</h1><p class="mt-6 text-xl text-slate-300">把世界遗产从“静态名录”转化为“可解释的时空格局”</p></div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Why World Heritage</p>
    <h1 class="mt-3 max-w-[1080px] font-serif text-[44px] font-bold leading-tight tracking-[-0.04em]">世界遗产天然具有“空间坐标 + 历史时间 + 文明类型”的多维数据特征</h1>
    <div class="mt-8 grid grid-cols-[1.05fr_1.2fr] gap-6">
      <div class="rounded-[26px] border border-white/10 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-xl"><div class="flex h-[340px] items-center justify-center rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_35%_45%,rgba(245,158,11,.75)_0_6px,transparent_7px),radial-gradient(circle_at_58%_36%,rgba(16,185,129,.65)_0_5px,transparent_6px),radial-gradient(circle_at_72%_58%,rgba(139,92,246,.72)_0_5px,transparent_6px),linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[length:auto,auto,auto,44px_44px,44px_44px]"><div class="rounded-full border border-[#c8a96a]/30 bg-[#0b0f1a]/80 px-7 py-4 text-center backdrop-blur-xl"><b class="font-serif text-3xl text-[#c8a96a]">Atlas</b><span class="block text-sm text-slate-400">spatial memory of civilization</span></div></div></div>
      <div class="grid grid-cols-1 gap-4">
        <div class="rounded-[22px] border border-white/10 bg-white/[0.05] p-6"><h2 class="font-serif text-2xl text-white">文明实体记忆</h2><p class="mt-3 leading-7 text-slate-300">遗产点承载建筑、考古、自然景观与文化线路，是公众理解历史的高密度入口。</p></div>
        <div class="rounded-[22px] border border-white/10 bg-white/[0.05] p-6"><h2 class="font-serif text-2xl text-white">强烈时空属性</h2><p class="mt-3 leading-7 text-slate-300">每个遗产点同时拥有地理坐标、所属国家/区域、入选年份与遗产类别。</p></div>
        <div class="rounded-[22px] border border-white/10 bg-white/[0.05] p-6"><h2 class="font-serif text-2xl text-white">传统展示局限</h2><p class="mt-3 leading-7 text-slate-300">列表、静态图和单一条目介绍难以帮助用户形成宏观格局和演进认知。</p></div>
      </div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(56,189,248,.12),transparent_30%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Research & Display Value</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">选题价值：面向教学、展陈与大众科普的多层次认知系统</h1>
    <div class="mt-10 grid grid-cols-3 gap-6">
      <div class="rounded-[28px] border border-[#c8a96a]/30 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-xl"><span class="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a96a]">Value 01</span><h2 class="mt-20 font-serif text-3xl text-white">构建多层次认知</h2><p class="mt-5 leading-8 text-slate-300">从全球分布到区域结构、国家排名、单点详情，形成逐级深入的信息路径。</p></div>
      <div class="rounded-[28px] border border-sky-400/30 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-xl"><span class="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a96a]">Value 02</span><h2 class="mt-20 font-serif text-3xl text-white">展现可视化潜力</h2><p class="mt-5 leading-8 text-slate-300">用地图、趋势、堆叠排名、区域矩形树图把抽象名录转换成可观察的数据结构。</p></div>
      <div class="rounded-[28px] border border-emerald-400/30 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-xl"><span class="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a96a]">Value 03</span><h2 class="mt-20 font-serif text-3xl text-white">拓展应用场景</h2><p class="mt-5 leading-8 text-slate-300">课堂汇报、博物馆/科技馆大屏、文化旅游科普、公众自主探索都可以复用同一套信息架构。</p></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_80%,rgba(200,169,106,.13),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Problem Diagnosis</p>
    <h1 class="mt-3 max-w-[1060px] font-serif text-[44px] font-bold leading-tight tracking-[-0.04em]">传统展示方式的问题不是“不美观”，而是阻碍用户形成关系判断</h1>
    <div class="mt-8 grid grid-cols-4 gap-4">
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-5xl text-[#c8a96a]">01</b><h2 class="mt-14 font-serif text-2xl text-white">信息割裂</h2><p class="mt-4 leading-7 text-slate-300">单点条目与统计数据分离，无法在同一上下文中解释。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-5xl text-[#c8a96a]">02</b><h2 class="mt-14 font-serif text-2xl text-white">空间感薄弱</h2><p class="mt-4 leading-7 text-slate-300">难以判断聚集、空白、跨区域分布和国家邻近关系。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-5xl text-[#c8a96a]">03</b><h2 class="mt-14 font-serif text-2xl text-white">时间演进弱</h2><p class="mt-4 leading-7 text-slate-300">入选年份隐藏在详情里，无法理解名录扩张节奏。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-5xl text-[#c8a96a]">04</b><h2 class="mt-14 font-serif text-2xl text-white">交互缺失</h2><p class="mt-4 leading-7 text-slate-300">缺少 hover、click、focus、filter、highlight 与 drill-down。</p></div>
    </div>
    <div class="mt-7 border-l-4 border-[#c8a96a] bg-[#c8a96a]/10 px-7 py-5 font-serif text-2xl text-white">因此产品要从“展示结果”转向“支持探索过程”。</div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(139,92,246,.12),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Target Users</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">目标用户：同一套数据，需要服务三种不同阅读深度</h1>
    <div class="mt-8 grid grid-cols-3 gap-6">
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-xl"><p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">Teacher / Presenter</p><h2 class="mt-5 font-serif text-3xl text-white">教师与课堂汇报者</h2><p class="mt-6 leading-8 text-slate-300">需要清晰叙事辅助：全球 → 区域 → 国家 → 单一遗产，适合讲授和演示。</p><div class="mt-8 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-400">关键需求：层级逻辑、可截图画面、图表解释。</div></div>
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-xl"><p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">Student / Learner</p><h2 class="mt-5 font-serif text-3xl text-white">学生与历史学习者</h2><p class="mt-6 leading-8 text-slate-300">通过地图与统计建立全局认知，用筛选理解区域、类别与历史阶段差异。</p><div class="mt-8 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-400">关键需求：低门槛筛选、可比较指标、细节解释。</div></div>
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-xl"><p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">Public / Enthusiast</p><h2 class="mt-5 font-serif text-3xl text-white">普通公众与爱好者</h2><p class="mt-6 leading-8 text-slate-300">希望快速知道“在哪、是什么、为什么重要”，同时保留探索乐趣与审美体验。</p><div class="mt-8 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-400">关键需求：地图直觉、视觉吸引、详情故事。</div></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">System Requirements</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">核心需求：功能、信息、交互、展示必须同时成立</h1>
    <div class="mt-8 grid grid-cols-2 gap-5">
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><h2 class="font-serif text-2xl text-[#c8a96a]">功能需求</h2><p class="mt-4 leading-8 text-slate-300">地图总览，按时间/区域/类别/国家/关键词筛选，国家对比，单点详情。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><h2 class="font-serif text-2xl text-[#c8a96a]">信息需求</h2><p class="mt-4 leading-8 text-slate-300">名称、国家、类别、年份、坐标、简介；区域总量占比、趋势、国家排位。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><h2 class="font-serif text-2xl text-[#c8a96a]">交互需求</h2><p class="mt-4 leading-8 text-slate-300">hover / click / focus / filter / highlight / drill-down，并通过全局状态保持视图联动。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><h2 class="font-serif text-2xl text-[#c8a96a]">展示需求</h2><p class="mt-4 leading-8 text-slate-300">高审美、历史人文与博物馆质感，适合桌面探索、课堂和大屏展示。</p></div>
    </div>
    <div class="mt-6 rounded-[22px] border border-[#c8a96a]/30 bg-[#c8a96a]/10 p-6 text-center font-serif text-2xl text-white">中心地图 + 周边仪表盘联动，是本产品最合适的信息组织方式。</div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_82%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Product Objective</p>
    <h1 class="mt-3 max-w-[1060px] font-serif text-[44px] font-bold leading-tight tracking-[-0.04em]">项目总体目标：以地理信息地图为核心视觉入口，表达空间、时间与类型的复合关系</h1>
    <div class="mt-8 grid grid-cols-[1.05fr_.95fr] gap-6">
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-2xl bg-white/[0.05] p-5"><b class="font-serif text-2xl text-[#c8a96a]">空间分布</b><p class="mt-3 leading-7 text-slate-300">识别全球遗产聚集、空白、区域不均衡与国家差异。</p></div>
          <div class="rounded-2xl bg-white/[0.05] p-5"><b class="font-serif text-2xl text-[#c8a96a]">时间演变</b><p class="mt-3 leading-7 text-slate-300">展示 1978–2025 年名录入选节奏与阶段性变化。</p></div>
          <div class="rounded-2xl bg-white/[0.05] p-5"><b class="font-serif text-2xl text-[#c8a96a]">类别结构</b><p class="mt-3 leading-7 text-slate-300">比较文化、自然、混合遗产在区域和国家中的构成。</p></div>
          <div class="rounded-2xl bg-white/[0.05] p-5"><b class="font-serif text-2xl text-[#c8a96a]">自主探索</b><p class="mt-3 leading-7 text-slate-300">通过筛选、聚焦、点击和详情帮助用户完成自己的问题路径。</p></div>
        </div>
      </div>
      <div class="rounded-[28px] border border-[#c8a96a]/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <h2 class="font-serif text-3xl text-white">产品形态</h2>
        <div class="mt-6 rounded-[22px] border border-white/10 bg-white/[0.05] p-5 text-center"><b class="font-serif text-4xl text-[#c8a96a]">中心地图</b><p class="mt-3 text-slate-300">作为第一阅读入口</p></div>
        <div class="my-4 text-center text-3xl text-sky-400">+</div>
        <div class="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 text-center"><b class="font-serif text-4xl text-[#c8a96a]">周边仪表盘</b><p class="mt-3 text-slate-300">承载统计、对比与解释</p></div>
      </div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_76%,rgba(56,189,248,.12),transparent_26%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Research Questions & Design Principles</p>
    <h1 class="mt-3 max-w-[1080px] font-serif text-[42px] font-bold leading-tight tracking-[-0.04em]">研究问题决定产品结构：不是堆图表，而是组织回答路径</h1>
    <div class="mt-8 grid grid-cols-[1.15fr_.85fr] gap-6">
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">核心研究问题</h2><div class="mt-5 space-y-4"><div class="rounded-2xl bg-white/[0.05] p-4 text-slate-300">全球分布规律与聚集形态是什么？</div><div class="rounded-2xl bg-white/[0.05] p-4 text-slate-300">区域、文明圈、国家之间的类别构成有何差异？</div><div class="rounded-2xl bg-white/[0.05] p-4 text-slate-300">1978–2025 的名录入选节奏如何变化？</div><div class="rounded-2xl bg-white/[0.05] p-4 text-slate-300">如何通过 UI 联动提高用户认知效率？</div></div></div>
      <div class="rounded-[28px] border border-[#c8a96a]/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">设计原则</h2><div class="mt-6 space-y-5"><div><b class="text-[#c8a96a]">Map-first</b><p class="mt-1 text-slate-300">地图作为第一视觉入口。</p></div><div><b class="text-[#c8a96a]">多视图联动</b><p class="mt-1 text-slate-300">筛选器、地图、图表共享状态。</p></div><div><b class="text-[#c8a96a]">渐进式信息分层</b><p class="mt-1 text-slate-300">总览、比较、证据分层呈现。</p></div><div><b class="text-[#c8a96a]">易于对比与叙事</b><p class="mt-1 text-slate-300">支持教学展示和公众理解。</p></div></div></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,.17),transparent_34%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 text-center"><p class="text-xs font-bold uppercase tracking-[0.3em] text-[#c8a96a]">Part 02</p><h1 class="mt-6 font-serif text-[78px] font-black tracking-[-0.06em]">相关数据</h1><p class="mt-6 text-xl text-slate-300">从 UNESCO 官方名录到前端可视化数据模型</p></div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(56,189,248,.12),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Data Source & Current Dataset</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">数据来源以 UNESCO 世界遗产中心官方名录为主，当前产品使用 1081 条站点数据</h1>
    <div class="mt-8 grid grid-cols-[1fr_1.4fr_1fr] gap-5">
      <div class="flex min-h-[390px] flex-col justify-center rounded-[24px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><p class="text-slate-400">当前数据集</p><b class="mt-4 block font-serif text-[88px] leading-none text-white">1081</b><span class="mt-2 text-slate-400">World Heritage Sites</span><div class="mt-8 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-400">年份范围：1978–2025</div></div>
      <div class="flex min-h-[390px] flex-col justify-center gap-6 rounded-[24px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><div class="grid grid-cols-[100px_1fr_56px] items-center gap-3"><span>文化遗产</span><div class="h-3.5 overflow-hidden rounded-full bg-white/10"><i class="block h-full w-[78.1%] rounded-full bg-[#f59e0b]"></i></div><b class="text-[#f59e0b]">844</b></div><div class="grid grid-cols-[100px_1fr_56px] items-center gap-3"><span>自然遗产</span><div class="h-3.5 overflow-hidden rounded-full bg-white/10"><i class="block h-full w-[18.6%] rounded-full bg-[#10b981]"></i></div><b class="text-[#10b981]">201</b></div><div class="grid grid-cols-[100px_1fr_56px] items-center gap-3"><span>混合遗产</span><div class="h-3.5 overflow-hidden rounded-full bg-white/10"><i class="block h-full w-[3.3%] rounded-full bg-[#8b5cf6]"></i></div><b class="text-[#8b5cf6]">36</b></div><p class="mt-2 text-sm leading-7 text-slate-400">类别颜色贯穿地图、图表、筛选、详情与本演示稿，形成统一视觉编码。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h3 class="font-serif text-2xl text-white">数据格式</h3><div class="mt-6 space-y-3 text-slate-300"><div class="rounded-xl bg-white/[0.05] p-4">UNESCO XML / KML / XLS</div><div class="rounded-xl bg-white/[0.05] p-4">Sites Navigator 空间信息</div><div class="rounded-xl bg-white/[0.05] p-4">本地 JSON 轻量化输出</div><div class="rounded-xl bg-white/[0.05] p-4">地图瓦片与站点坐标</div></div></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Data Characteristics</p>
    <h1 class="mt-3 max-w-[1080px] font-serif text-[44px] font-bold leading-tight tracking-[-0.04em]">数据特征决定可视化策略：空间、时间、类别、属性四类信息并行组织</h1>
    <div class="mt-8 grid grid-cols-4 gap-4">
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-4xl text-[#c8a96a]">01</b><h2 class="mt-12 font-serif text-2xl text-white">空间性</h2><p class="mt-4 leading-7 text-slate-300">国家、区域、精确坐标与跨国遗产关系，支撑地图点位和空间聚焦。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-4xl text-[#c8a96a]">02</b><h2 class="mt-12 font-serif text-2xl text-white">时间性</h2><p class="mt-4 leading-7 text-slate-300">入选年份覆盖 1978–2025，可展示年度趋势、阶段峰值和时间筛选。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-4xl text-[#c8a96a]">03</b><h2 class="mt-12 font-serif text-2xl text-white">类别性</h2><p class="mt-4 leading-7 text-slate-300">文化、自然、混合三类遗产形成全局统一颜色编码与结构比较。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><b class="font-serif text-4xl text-[#c8a96a]">04</b><h2 class="mt-12 font-serif text-2xl text-white">属性性</h2><p class="mt-4 leading-7 text-slate-300">标准、简介、图片和来源链接进入详情侧栏，作为解释与科普证据。</p></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,.12),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Distribution Overview</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">区域与国家概览：数据分布呈现明显的区域集中与头部国家效应</h1>
    <div class="mt-8 grid grid-cols-[1fr_1fr] gap-6">
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <h2 class="font-serif text-3xl text-white">UNESCO 区域规模</h2>
        <div class="mt-6 space-y-4 text-sm text-slate-300">
          <div class="grid grid-cols-[185px_1fr_48px] items-center gap-3"><span>Europe–North America</span><div class="h-3 rounded-full bg-white/10"><i class="block h-full w-full rounded-full bg-[#c8a96a]"></i></div><b>506</b></div>
          <div class="grid grid-cols-[185px_1fr_48px] items-center gap-3"><span>Asia–Pacific</span><div class="h-3 rounded-full bg-white/10"><i class="block h-full w-[51%] rounded-full bg-[#3b82f6]"></i></div><b>260</b></div>
          <div class="grid grid-cols-[185px_1fr_48px] items-center gap-3"><span>Latin America</span><div class="h-3 rounded-full bg-white/10"><i class="block h-full w-[28%] rounded-full bg-[#10b981]"></i></div><b>140</b></div>
          <div class="grid grid-cols-[185px_1fr_48px] items-center gap-3"><span>Africa</span><div class="h-3 rounded-full bg-white/10"><i class="block h-full w-[18%] rounded-full bg-[#f59e0b]"></i></div><b>92</b></div>
          <div class="grid grid-cols-[185px_1fr_48px] items-center gap-3"><span>Arab States</span><div class="h-3 rounded-full bg-white/10"><i class="block h-full w-[16%] rounded-full bg-[#8b5cf6]"></i></div><b>83</b></div>
        </div>
      </div>
      <div class="rounded-[28px] border border-[#c8a96a]/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl">
        <h2 class="font-serif text-3xl text-white">Top 国家/地区</h2>
        <div class="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
          <div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">中国</b><span class="float-right">54</span></div><div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">意大利</b><span class="float-right">48</span></div>
          <div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">西班牙</b><span class="float-right">42</span></div><div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">法国</b><span class="float-right">39</span></div>
          <div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">德国</b><span class="float-right">38</span></div><div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">印度</b><span class="float-right">35</span></div>
          <div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">墨西哥</b><span class="float-right">32</span></div><div class="rounded-xl bg-white/[0.05] p-4"><b class="text-[#c8a96a]">英国</b><span class="float-right">29</span></div>
        </div>
        <p class="mt-5 text-sm leading-7 text-slate-400">因此国家排名不能只看总量，还要显示文化/自然/混合的结构差异。</p>
      </div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Field Dictionary</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">字段不是后台细节，而是决定可视化能力的原材料</h1>
    <div class="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#111827]/80 shadow-2xl backdrop-blur-xl">
      <div class="grid grid-cols-[220px_1fr_1.25fr] bg-white/[0.06] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#c8a96a]"><span>Field</span><span>Meaning</span><span>Visualization Use</span></div>
      <div class="divide-y divide-white/10 text-[15px] text-slate-300"><div class="grid grid-cols-[220px_1fr_1.25fr] px-6 py-3"><b class="text-white">name / englishName</b><span>遗产名称</span><span>Hover、详情、搜索与排名标签</span></div><div class="grid grid-cols-[220px_1fr_1.25fr] px-6 py-3"><b class="text-white">country / region</b><span>国家与 UNESCO 区域</span><span>地图分组、区域分析、国家对比</span></div><div class="grid grid-cols-[220px_1fr_1.25fr] px-6 py-3"><b class="text-white">category</b><span>culture / nature / mixed</span><span>筛选、颜色编码、堆叠条形、环图</span></div><div class="grid grid-cols-[220px_1fr_1.25fr] px-6 py-3"><b class="text-white">year</b><span>入选年份</span><span>时间范围、年度趋势、累计变化</span></div><div class="grid grid-cols-[220px_1fr_1.25fr] px-6 py-3"><b class="text-white">lat / lng</b><span>经纬度</span><span>地图点位、聚类、国家聚焦</span></div><div class="grid grid-cols-[220px_1fr_1.25fr] px-6 py-3"><b class="text-white">criteria / description</b><span>标准与简介</span><span>详情侧栏、科普叙事、证据层信息</span></div></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(56,189,248,.12),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Preprocessing & Data Tables</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">清洗目标：把官方名录转换成前端可直接聚合和联动的数据表</h1>
    <div class="mt-8 grid grid-cols-[.95fr_1.05fr] gap-6">
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">预处理流程</h2><div class="mt-6 space-y-3 text-slate-300"><div class="rounded-2xl bg-white/[0.05] p-4">字段标准化：统一 name、country、region、category、year</div><div class="rounded-2xl bg-white/[0.05] p-4">名称归一：处理中英文名、跨国遗产、多国家归属</div><div class="rounded-2xl bg-white/[0.05] p-4">坐标清洗：WGS84 经纬度用于地图点位定位</div><div class="rounded-2xl bg-white/[0.05] p-4">生成统计：国家、区域、类别、年份聚合表</div></div></div>
      <div class="rounded-[28px] border border-[#c8a96a]/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">逻辑数据表</h2><div class="mt-6 grid gap-4"><div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5"><b class="text-[#c8a96a]">heritage_sites</b><p class="mt-2 text-slate-300">site_name / country / region / category / year / latlng / criteria / description</p></div><div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5"><b class="text-[#c8a96a]">country_stats</b><p class="mt-2 text-slate-300">country / total / culture / nature / mixed / year_dist</p></div><div class="rounded-2xl border border-white/10 bg-white/[0.05] p-5"><b class="text-[#c8a96a]">region_stats</b><p class="mt-2 text-slate-300">region / total / country_count / category_ratio / avg_num</p></div></div></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_80%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Data-to-Visualization Mapping</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">数据到图形：每一种图表都要对应明确问题</h1>
    <div class="mt-8 grid grid-cols-5 gap-4">
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="h-24 rounded-2xl bg-[radial-gradient(circle_at_32%_45%,#f59e0b_0_5px,transparent_6px),radial-gradient(circle_at_70%_55%,#10b981_0_5px,transparent_6px),rgba(255,255,255,.05)]"></div><h2 class="mt-6 font-serif text-2xl text-white">坐标</h2><p class="mt-3 text-sm leading-7 text-slate-300">世界地图点位、聚类、区域聚集。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="flex h-24 items-end gap-2 rounded-2xl bg-white/[0.05] p-4"><i class="h-8 w-3 bg-[#c8a96a]"></i><i class="h-14 w-3 bg-[#c8a96a]"></i><i class="h-10 w-3 bg-[#c8a96a]"></i><i class="h-20 w-3 bg-[#c8a96a]"></i></div><h2 class="mt-6 font-serif text-2xl text-white">年份</h2><p class="mt-3 text-sm leading-7 text-slate-300">时间趋势、年份筛选、累计曲线。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="h-24 rounded-2xl bg-[conic-gradient(#f59e0b_0_78%,#10b981_78%_96%,#8b5cf6_96%_100%)] p-5"><div class="h-full w-full rounded-full bg-[#111827]"></div></div><h2 class="mt-6 font-serif text-2xl text-white">类别</h2><p class="mt-3 text-sm leading-7 text-slate-300">环图、图例、颜色编码、筛选。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="space-y-2 rounded-2xl bg-white/[0.05] p-4"><div class="h-3 w-[92%] bg-[#f59e0b]"></div><div class="h-3 w-[78%] bg-[#c8a96a]"></div><div class="h-3 w-[64%] bg-[#3b82f6]"></div></div><h2 class="mt-6 font-serif text-2xl text-white">国家统计</h2><p class="mt-3 text-sm leading-7 text-slate-300">排名、对比、类别堆叠。</p></div>
      <div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="grid h-24 grid-cols-3 gap-1 rounded-2xl bg-white/[0.05] p-3"><i class="col-span-2 row-span-2 bg-[#c8a96a]/60"></i><i class="bg-[#3b82f6]/60"></i><i class="bg-[#10b981]/60"></i><i class="bg-[#8b5cf6]/60"></i></div><h2 class="mt-6 font-serif text-2xl text-white">区域层级</h2><p class="mt-3 text-sm leading-7 text-slate-300">矩形树图、区域结构与国家分布。</p></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,.17),transparent_34%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 text-center"><p class="text-xs font-bold uppercase tracking-[0.3em] text-[#c8a96a]">Part 03</p><h1 class="mt-6 font-serif text-[78px] font-black tracking-[-0.06em]">UI 设计</h1><p class="mt-6 text-xl text-slate-300">复刻 PDF 的地图仪表盘方向，并升级为当前产品一致的交互体验</p></div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(56,189,248,.12),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Shared Visual Language</p>
    <h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">产品视觉语言：暗色地图、博物馆金与统一类别编码</h1>
    <div class="mt-8 grid grid-cols-[1fr_1.1fr] gap-6">
      <div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">视觉关键词</h2><div class="mt-6 grid grid-cols-2 gap-4"><div class="rounded-2xl bg-white/[0.05] p-5">深色底图</div><div class="rounded-2xl bg-white/[0.05] p-5">考古金色</div><div class="rounded-2xl bg-white/[0.05] p-5">精细网格</div><div class="rounded-2xl bg-white/[0.05] p-5">半透明面板</div><div class="rounded-2xl bg-white/[0.05] p-5">数据光点</div><div class="rounded-2xl bg-white/[0.05] p-5">克制高亮</div></div></div>
      <div class="rounded-[28px] border border-[#c8a96a]/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">颜色系统</h2><div class="mt-6 space-y-4"><div class="grid grid-cols-[130px_1fr] items-center gap-4"><span class="text-slate-400">Base</span><div class="flex gap-3"><i class="h-12 flex-1 rounded-xl bg-[#0b0f1a] ring-1 ring-white/10"></i><i class="h-12 flex-1 rounded-xl bg-[#111827] ring-1 ring-white/10"></i></div></div><div class="grid grid-cols-[130px_1fr] items-center gap-4"><span class="text-slate-400">Accent</span><div class="h-12 rounded-xl bg-[#c8a96a]"></div></div><div class="grid grid-cols-[130px_1fr] items-center gap-4"><span class="text-slate-400">Category</span><div class="grid grid-cols-3 gap-3"><i class="h-12 rounded-xl bg-[#f59e0b]"></i><i class="h-12 rounded-xl bg-[#10b981]"></i><i class="h-12 rounded-xl bg-[#8b5cf6]"></i></div></div><p class="text-sm leading-7 text-slate-400">类别颜色固定：文化遗产 #f59e0b，自然遗产 #10b981，混合遗产 #8b5cf6。</p></div></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-10 py-8 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(200,169,106,.12),transparent_28%),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 h-full rounded-[28px] border border-white/10 bg-[#0f172a]/80 p-6 shadow-2xl backdrop-blur-xl">
    <div class="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827] px-5 py-4"><div class="flex items-center gap-4"><span class="flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a96a]/35 bg-[#c8a96a]/10 text-[#c8a96a]">◈</span><div><b class="font-serif text-xl text-white">世界文化遗产可视化系统</b><p class="text-xs uppercase tracking-[0.18em] text-slate-500">WORLD HERITAGE ATLAS</p></div></div><div class="text-sm uppercase tracking-[0.18em] text-[#c8a96a]">1081 Sites</div></div>
    <div class="mt-4 grid grid-cols-4 gap-3"><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><b class="font-serif text-2xl">1081</b><p class="text-xs text-slate-400">遗产总量</p></div><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><b class="font-serif text-2xl">185</b><p class="text-xs text-slate-400">国家/地区</p></div><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><b class="font-serif text-2xl">1978</b><p class="text-xs text-slate-400">最早入选</p></div><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><b class="font-serif text-2xl">78.1%</b><p class="text-xs text-slate-400">文化遗产占比</p></div></div>
    <div class="mt-4 grid h-[455px] grid-cols-[235px_1fr] gap-4"><div class="rounded-2xl border border-white/10 bg-[#111827] p-4"><p class="font-serif tracking-[0.18em] text-[#c8a96a]">FILTERS</p><div class="mt-5 space-y-4 text-sm text-slate-300"><div><p class="mb-2 text-xs text-slate-500">年份范围</p><div class="h-1 rounded-full bg-[#c8a96a]"></div><div class="mt-2 flex justify-between text-xs text-slate-500"><span>1978</span><span>2025</span></div></div><div class="rounded-xl border border-[#f59e0b]/35 bg-[#f59e0b]/10 p-3">文化遗产 ✓</div><div class="rounded-xl border border-[#10b981]/35 bg-[#10b981]/10 p-3">自然遗产 ✓</div><div class="rounded-xl border border-[#8b5cf6]/35 bg-[#8b5cf6]/10 p-3">混合遗产 ✓</div><div class="rounded-xl border border-white/10 bg-white/[0.04] p-3">区域：全部</div><div class="rounded-xl border border-white/10 bg-white/[0.04] p-3">国家：全部</div></div></div>
      <div class="grid grid-rows-[1fr_150px] gap-4"><div class="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_42%_42%,rgba(245,158,11,.9)_0_7px,transparent_8px),radial-gradient(circle_at_58%_35%,rgba(245,158,11,.85)_0_15px,transparent_16px),radial-gradient(circle_at_62%_56%,rgba(16,185,129,.8)_0_8px,transparent_9px),radial-gradient(circle_at_28%_55%,rgba(139,92,246,.8)_0_6px,transparent_7px),linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[length:auto,auto,auto,auto,36px_36px,36px_36px] p-5"><div class="flex justify-between"><span class="font-serif tracking-[0.18em] text-[#c8a96a]">ATLAS</span><span class="text-xs text-slate-400"><i class="text-[#f59e0b]">■</i> 文化 <i class="ml-3 text-[#10b981]">■</i> 自然 <i class="ml-3 text-[#8b5cf6]">■</i> 混合</span></div></div><div class="grid grid-cols-3 gap-4"><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p class="text-xs text-[#c8a96a]">时间趋势</p><div class="mt-4 flex h-20 items-end gap-1"><i class="h-8 flex-1 bg-[#c8a96a]"></i><i class="h-14 flex-1 bg-[#c8a96a]"></i><i class="h-10 flex-1 bg-[#c8a96a]"></i><i class="h-16 flex-1 bg-[#c8a96a]"></i><i class="h-20 flex-1 bg-[#c8a96a]"></i></div></div><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p class="text-xs text-[#c8a96a]">类别占比</p><div class="mx-auto mt-3 h-24 w-24 rounded-full bg-[conic-gradient(#f59e0b_0_78%,#10b981_78%_96%,#8b5cf6_96%_100%)] p-4"><div class="h-full rounded-full bg-[#0f172a]"></div></div></div><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p class="text-xs text-[#c8a96a]">联动状态</p><p class="mt-4 text-sm leading-7 text-slate-400">年份：1978–2025<br/>区域：全部<br/>类别：3</p></div></div></div>
    </div>
  </div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(56,189,248,.12),transparent_26%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10"><p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Map-first Interaction</p><h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">地图是主视觉入口：空间探索不能被图表和弹窗打断</h1><div class="mt-8 grid grid-cols-[1.2fr_.8fr] gap-6"><div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><div class="h-[390px] rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_48%_38%,#f59e0b_0_16px,transparent_17px),radial-gradient(circle_at_54%_45%,#f59e0b_0_10px,transparent_11px),radial-gradient(circle_at_67%_48%,#10b981_0_8px,transparent_9px),radial-gradient(circle_at_36%_60%,#8b5cf6_0_7px,transparent_8px),linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[length:auto,auto,auto,auto,42px_42px,42px_42px]"></div></div><div class="space-y-4"><div class="rounded-[22px] border border-[#c8a96a]/30 bg-[#111827]/80 p-6"><h2 class="font-serif text-2xl text-white">地图行为</h2><p class="mt-4 leading-7 text-slate-300">聚类显示全局密度；筛选后 fitBounds 聚焦国家或区域；点击 marker 打开详情侧栏。</p></div><div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-6"><h2 class="font-serif text-2xl text-white">筛选行为</h2><p class="mt-4 leading-7 text-slate-300">年份、类别、区域、国家、关键词形成统一筛选条件，地图和图表同步刷新。</p></div><div class="rounded-[22px] border border-white/10 bg-[#111827]/80 p-6"><h2 class="font-serif text-2xl text-white">体验底线</h2><p class="mt-4 leading-7 text-slate-300">选择详情时不重置地图，不丢失缩放层级，不让用户失去空间上下文。</p></div></div></div></div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10"><p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Dashboard Charts</p><h1 class="mt-3 max-w-[1060px] font-serif text-[44px] font-bold leading-tight tracking-[-0.04em]">图表不是装饰：每张图都承担一个判断任务</h1><div class="mt-8 grid grid-cols-2 gap-5"><div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="flex justify-between"><h2 class="font-serif text-2xl text-white">时间趋势</h2><span class="text-sm text-[#c8a96a]">when</span></div><div class="mt-5 flex h-28 items-end gap-2"><i class="h-10 flex-1 bg-[#c8a96a]/70"></i><i class="h-20 flex-1 bg-[#c8a96a]/70"></i><i class="h-16 flex-1 bg-[#c8a96a]/70"></i><i class="h-24 flex-1 bg-[#c8a96a]/70"></i><i class="h-28 flex-1 bg-[#c8a96a]"></i><i class="h-14 flex-1 bg-[#c8a96a]/70"></i></div><p class="mt-4 text-sm text-slate-400">回答：哪一阶段入选最密集？是否存在扩张周期？</p></div><div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="flex justify-between"><h2 class="font-serif text-2xl text-white">类别占比</h2><span class="text-sm text-[#c8a96a]">what</span></div><div class="mx-auto mt-4 h-32 w-32 rounded-full bg-[conic-gradient(#f59e0b_0_78%,#10b981_78%_96%,#8b5cf6_96%_100%)] p-5"><div class="flex h-full items-center justify-center rounded-full bg-[#111827] text-sm text-slate-400">1081</div></div><p class="mt-2 text-sm text-slate-400">回答：当前筛选下文化、自然、混合遗产结构如何？</p></div><div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="flex justify-between"><h2 class="font-serif text-2xl text-white">国家堆叠排名</h2><span class="text-sm text-[#c8a96a]">who</span></div><div class="mt-5 space-y-3 text-sm"><div class="grid grid-cols-[90px_1fr_38px] items-center gap-3"><span>中国</span><div class="flex h-4"><i class="w-[82%] bg-[#f59e0b]"></i><i class="w-[12%] bg-[#10b981]"></i><i class="w-[6%] bg-[#8b5cf6]"></i></div><b>54</b></div><div class="grid grid-cols-[90px_1fr_38px] items-center gap-3"><span>意大利</span><div class="flex h-4"><i class="w-[90%] bg-[#f59e0b]"></i><i class="w-[8%] bg-[#10b981]"></i><i class="w-[2%] bg-[#8b5cf6]"></i></div><b>48</b></div><div class="grid grid-cols-[90px_1fr_38px] items-center gap-3"><span>西班牙</span><div class="flex h-4"><i class="w-[86%] bg-[#f59e0b]"></i><i class="w-[11%] bg-[#10b981]"></i><i class="w-[3%] bg-[#8b5cf6]"></i></div><b>42</b></div></div><p class="mt-4 text-sm text-slate-400">回答：总量之外，各国类别结构是否不同？</p></div><div class="rounded-[24px] border border-white/10 bg-[#111827]/80 p-6"><div class="flex justify-between"><h2 class="font-serif text-2xl text-white">区域层级</h2><span class="text-sm text-[#c8a96a]">where</span></div><div class="mt-5 grid h-28 grid-cols-6 grid-rows-3 gap-1"><i class="col-span-3 row-span-3 bg-[#c8a96a]/65"></i><i class="col-span-2 row-span-2 bg-[#3b82f6]/65"></i><i class="bg-[#10b981]/65"></i><i class="bg-[#8b5cf6]/65"></i><i class="bg-[#f59e0b]/65"></i></div><p class="mt-4 text-sm text-slate-400">回答：区域内部哪些国家贡献最多？是否存在头部集中？</p></div></div></div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_76%,rgba(56,189,248,.12),transparent_26%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10"><p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Detail Drawer</p><h1 class="mt-3 max-w-[1080px] font-serif text-[42px] font-bold leading-tight tracking-[-0.04em]">详情面板是“证据层”，不是打断探索的“弹窗层”</h1><div class="mt-8 grid grid-cols-[1fr_330px] gap-5 rounded-[28px] border border-white/10 bg-[#111827]/70 p-5 shadow-2xl backdrop-blur-xl"><div class="relative min-h-[405px] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_40%_38%,rgba(245,158,11,.85)_0_8px,transparent_9px),radial-gradient(circle_at_62%_50%,rgba(16,185,129,.75)_0_8px,transparent_9px),radial-gradient(circle_at_72%_42%,rgba(245,158,11,.75)_0_14px,transparent_15px),linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[length:auto,auto,auto,42px_42px,42px_42px]"><div class="absolute inset-0 bg-[#0b0f1a]/35"></div><div class="absolute left-6 top-6 rounded-xl border border-white/10 bg-[#111827]/80 px-4 py-2 text-sm text-slate-300">地图保持当前缩放与选中状态</div></div><div class="rounded-[22px] border border-[#c8a96a]/30 bg-[#0b0f1a]/95 p-6"><div class="flex items-center justify-between"><h2 class="font-serif text-3xl text-[#c8a96a]">Detail</h2><span class="rounded-lg border border-sky-400/50 px-2 py-1 text-sky-300">×</span></div><p class="mt-6 text-xs uppercase tracking-[0.22em] text-slate-500">SITE</p><h3 class="mt-3 font-serif text-2xl text-white">秦始皇陵及兵马俑坑</h3><div class="mt-5 grid grid-cols-2 gap-3 text-sm"><div class="bg-white/[0.05] p-3"><span class="block text-slate-500">国家</span>中国</div><div class="bg-white/[0.05] p-3"><span class="block text-slate-500">区域</span>Asia-Pacific</div><div class="bg-white/[0.05] p-3"><span class="block text-slate-500">类别</span>culture</div><div class="bg-white/[0.05] p-3"><span class="block text-slate-500">年份</span>1987</div></div><p class="mt-5 rounded-xl bg-white/[0.05] p-4 text-sm leading-7 text-slate-300">右侧侧栏覆盖但不改变地图布局，避免地图刷新感；关闭前保留 marker、缩放层级和筛选状态。</p></div></div></div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10"><p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Interaction Model</p><h1 class="mt-3 max-w-[1060px] font-serif text-[44px] font-bold leading-tight tracking-[-0.04em]">统一筛选条件让“地图、筛选器、图表、详情”组成一个产品</h1><div class="mt-10 grid grid-cols-[1fr_90px_1fr_90px_1fr] items-center gap-2"><div class="min-h-[150px] rounded-[20px] border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-xl"><b class="block font-serif text-[28px] text-[#c8a96a]">User action</b><span class="mt-3 block leading-7 text-slate-300">筛选年份、选择区域、点击国家排名、点击地图点位</span></div><div class="text-center text-4xl text-sky-400">→</div><div class="min-h-[150px] rounded-[20px] border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-xl"><b class="block font-serif text-[28px] text-[#c8a96a]">Shared filters</b><span class="mt-3 block leading-7 text-slate-300">年份范围 / 遗产类别 / 区域 / 国家 / 当前遗产</span></div><div class="text-center text-4xl text-sky-400">→</div><div class="min-h-[150px] rounded-[20px] border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-xl"><b class="block font-serif text-[28px] text-[#c8a96a]">Linked views</b><span class="mt-3 block leading-7 text-slate-300">地图点位、KPI、统计图表与详情侧栏同步更新</span></div></div><div class="mt-8 rounded-[24px] border border-[#c8a96a]/30 bg-[#c8a96a]/10 p-6 text-center font-serif text-2xl text-white">关键体验改进：打开详情时不触发地图重置，保留当前视角与筛选上下文。</div></div>
</div>

---
layout: full
---

<div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0b0f1a] px-16 py-14 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,.17),transparent_34%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 text-center"><p class="text-xs font-bold uppercase tracking-[0.3em] text-[#c8a96a]">Part 04</p><h1 class="mt-6 font-serif text-[78px] font-black tracking-[-0.06em]">系统架构</h1><p class="mt-6 text-xl text-slate-300">以清晰的数据流支撑地图、图表、筛选与详情体验</p></div>
</div>
 
---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_80%,rgba(200,169,106,.14),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10"><p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">System Architecture</p><h1 class="mt-3 font-serif text-[44px] font-bold tracking-[-0.04em]">四层架构：数据层、处理层、可视化层、交互控制层</h1><div class="mt-8 grid grid-cols-4 gap-4"><div class="rounded-[26px] border border-white/10 bg-[#111827]/80 p-6 shadow-2xl"><span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">Layer 01</span><h2 class="mt-12 font-serif text-2xl text-white">UNESCO 数据层</h2><p class="mt-4 leading-7 text-slate-300">官方名录、坐标、国家区域、类别、年份、简介、标准。</p></div><div class="rounded-[26px] border border-white/10 bg-[#111827]/80 p-6 shadow-2xl"><span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">Layer 02</span><h2 class="mt-12 font-serif text-2xl text-white">数据处理层</h2><p class="mt-4 leading-7 text-slate-300">字段清洗、标准化、聚合统计、轻量 JSON 输出。</p></div><div class="rounded-[26px] border border-white/10 bg-[#111827]/80 p-6 shadow-2xl"><span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">Layer 03</span><h2 class="mt-12 font-serif text-2xl text-white">可视化层</h2><p class="mt-4 leading-7 text-slate-300">地图点位、聚类、趋势、环图、堆叠排名、矩形树图。</p></div><div class="rounded-[26px] border border-white/10 bg-[#111827]/80 p-6 shadow-2xl"><span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a96a]">Layer 04</span><h2 class="mt-12 font-serif text-2xl text-white">交互控制层</h2><p class="mt-4 leading-7 text-slate-300">筛选状态、地图聚焦、图表点击、详情 drill-down、返回。</p></div></div><div class="mt-7 rounded-[22px] border border-[#c8a96a]/30 bg-[#c8a96a]/10 p-5 text-center text-slate-200">核心模块：Map / Time / Category / Ranking / Region / Detail</div></div>
</div>

---
layout: full
---

<div class="relative h-full w-full overflow-hidden bg-[#0b0f1a] px-16 py-12 text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(56,189,248,.12),transparent_28%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10"><p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Rendering & Performance</p><h1 class="mt-3 max-w-[1060px] font-serif text-[44px] font-bold leading-tight tracking-[-0.04em]">性能策略：先保证地图交互稳定，再提高统计计算与渲染效率</h1><div class="mt-8 grid grid-cols-[1fr_1fr] gap-6"><div class="rounded-[28px] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">当前体验策略</h2><div class="mt-6 space-y-4 text-slate-300"><div class="rounded-2xl bg-white/[0.05] p-4">地图聚类承载 1081 个点位，先呈现全局密度，再支持逐级放大探索。</div><div class="rounded-2xl bg-white/[0.05] p-4">统计结果按筛选条件复用，打开详情不触发全量地图与图表刷新。</div><div class="rounded-2xl bg-white/[0.05] p-4">统计图表承担趋势、占比、排名和区域层级表达。</div></div></div><div class="rounded-[28px] border border-[#c8a96a]/30 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl"><h2 class="font-serif text-3xl text-white">后续体验优化</h2><div class="mt-6 space-y-4 text-slate-300"><div class="rounded-2xl bg-white/[0.05] p-4">搜索输入节流处理，避免每个字符都刷新地图。</div><div class="rounded-2xl bg-white/[0.05] p-4">对国家边界与聚合结果进行静态预计算。</div><div class="rounded-2xl bg-white/[0.05] p-4">大屏场景采用更高性能的点位渲染方案。</div></div></div></div></div>
</div>

 
---
layout: full
---

<div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0b0f1a] px-16 py-14 text-center text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,.16),transparent_34%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]"></div>
  <div class="relative z-10 max-w-[980px]"><p class="text-xs font-bold uppercase tracking-[0.24em] text-[#c8a96a]">Conclusion</p><h1 class="mt-5 font-serif text-5xl font-bold leading-tight tracking-[-0.035em]">一个好的世界遗产数据产品，核心不是图表数量，而是让用户更快形成可靠判断。</h1><div class="mt-10 flex flex-wrap justify-center gap-3"><span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">空间上下文稳定</span><span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">视觉编码一致</span><span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">比较方式正确</span><span class="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-slate-300">洞察路径清晰</span></div><p class="mt-12 text-xl text-[#c8a96a]">谢谢</p></div>
</div>
