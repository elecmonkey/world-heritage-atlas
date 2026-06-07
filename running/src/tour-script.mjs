export const tourScript = [
  {
    id: 'opening',
    duration: 10,
    title: '开场：世界文化遗产可视化系统',
    narration:
      '各位老师好，这是世界文化遗产可视化系统。系统把一千零八十一项世界遗产放到同一个交互式地图和数据看板中，帮助我们从空间、时间、类别和国家四个角度快速理解全球遗产分布。',
    action: { type: 'reset', scroll: 'top' },
  },
  {
    id: 'overview',
    duration: 13,
    title: '总览指标与全球地图',
    narration:
      '顶部四个指标会随着筛选实时变化：遗产总量、覆盖国家、最早入选年份以及文化类占比。中间的 Atlas 地图使用点位和聚合气泡展示全球分布，颜色区分文化、自然与混合遗产。',
    action: { type: 'focus', selector: '[data-tour="atlas"]' },
  },
  {
    id: 'region-filter',
    duration: 12,
    title: '区域联动：聚焦亚太地区',
    narration:
      '左侧筛选面板支持年份、类别、区域、国家和关键词检索。现在切换到 Asia-Pacific，地图自动缩放到亚太范围，统计卡片和下方图表同步刷新。',
    action: { type: 'region', value: 'Asia-Pacific', scroll: 'top' },
  },
  {
    id: 'country-linkage',
    duration: 13,
    title: '国家联动：聚焦中国',
    narration:
      '国家排行图也参与交互联动。这里选择中国后，地图只高亮中国相关点位，联动状态面板明确显示当前国家条件，避免展示时误读筛选上下文。',
    action: { type: 'country', value: '中国', scroll: 'top' },
  },
  {
    id: 'site-detail',
    duration: 14,
    title: '点位详情：保持上下文查看证据',
    narration:
      '点击地图点位或由脚本选中一个可见遗产，会打开右侧详情抽屉。抽屉保留地图上下文，同时展示遗产名称、国家、区域、类别、年份、坐标、评选标准和简介。',
    action: { type: 'site', value: '长城', scroll: 'top' },
  },
  {
    id: 'timeline',
    duration: 13,
    title: '时间趋势：年度入选节奏',
    narration:
      '下方时间趋势图按年份统计当前筛选结果。点击柱形可以把年份范围收窄到单一年份，用于观察某一年新增遗产的空间分布和类别结构。',
    action: { type: 'year', value: 1987, scroll: 'analytics', closeDetail: true },
  },
  {
    id: 'category',
    duration: 12,
    title: '类别占比：反向筛选文化遗产',
    narration:
      '类别环图展示当前结果的结构占比，并支持反向筛选。切换到文化遗产后，地图、国家排名、区域结构和总量指标会同时变成同一口径。',
    action: { type: 'category', value: 'culture', scroll: 'analytics' },
  },
  {
    id: 'region-analytics',
    duration: 13,
    title: '区域结构与 Treemap 层级分析',
    narration:
      '区域类别结构用堆叠条形比较五大区域的文化、自然、混合构成；Treemap 进一步把区域和国家做层级表达，让分布重心一眼可见。',
    action: { type: 'region', value: 'Europe-North America', scroll: 'analytics' },
  },
  {
    id: 'search',
    duration: 12,
    title: '关键词检索：快速定位案例',
    narration:
      '最后展示关键词能力。搜索秦始皇陵后，系统只保留匹配遗产，并可以继续打开详情，用于课堂汇报时快速切换到具体案例。',
    action: { type: 'keyword', value: '秦始皇陵', scroll: 'top' },
  },
  {
    id: 'closing',
    duration: 8,
    title: '总结：从总览到证据的联动看板',
    narration:
      '总结来说，本系统的核心是多视图联动：地图负责空间定位，筛选器负责条件控制，图表负责趋势和结构分析，详情抽屉负责证据呈现。以上就是完整展示。',
    action: { type: 'site', value: '秦始皇陵', scroll: 'top' },
  },
]

export function toSrtTime(seconds) {
  const ms = Math.round(seconds * 1000)
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  const milli = ms % 1000
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(milli).padStart(3, '0')}`
}

export function buildSrt(script = tourScript) {
  let cursor = 0
  return script
    .map((item, index) => {
      const start = cursor
      const end = cursor + item.duration
      cursor = end
      return `${index + 1}\n${toSrtTime(start)} --> ${toSrtTime(end)}\n${item.title}\n${item.narration}\n`
    })
    .join('\n')
}

export function totalDuration(script = tourScript) {
  return script.reduce((sum, item) => sum + item.duration, 0)
}
