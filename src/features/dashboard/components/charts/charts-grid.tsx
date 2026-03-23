import ReactECharts from 'echarts-for-react'

import { useDashboardStore } from '../../../../app/store/dashboard-store'
import { categoryMeta } from '../../constants/theme'
import type { CountryStat, RegionCategoryRow, RegionTreemapNode } from '../../types'

type ChartsGridProps = {
  trendSeries: { years: number[]; values: number[] }
  categoryDistribution: Array<{ name: string; value: number; color: string; key: string }>
  countryStats: CountryStat[]
  regionTreemap: RegionTreemapNode[]
  regionCategoryRows: RegionCategoryRow[]
}

const axisStyle = {
  axisLine: { lineStyle: { color: 'rgba(148,163,184,0.24)' } },
  axisLabel: { color: '#94A3B8', fontSize: 11 },
  splitLine: { lineStyle: { color: 'rgba(148,163,184,0.12)' } },
}

export function ChartsGrid({
  trendSeries,
  categoryDistribution,
  countryStats,
  regionTreemap,
  regionCategoryRows,
}: ChartsGridProps) {
  const filter = useDashboardStore((state) => state.filter)
  const setFilter = useDashboardStore((state) => state.setFilter)
  const setSelection = useDashboardStore((state) => state.setSelection)

  return (
    <section className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="时间趋势">
          <ReactECharts
            option={{
              backgroundColor: 'transparent',
              tooltip: { trigger: 'axis' },
              grid: { left: 18, right: 18, top: 30, bottom: 20, containLabel: true },
              xAxis: { type: 'category', data: trendSeries.years, ...axisStyle },
              yAxis: { type: 'value', ...axisStyle },
              series: [
                {
                  data: trendSeries.values,
                  type: 'bar',
                  barWidth: 12,
                  itemStyle: { color: '#C8A96A' },
                  emphasis: { itemStyle: { color: '#F59E0B' } },
                },
              ],
            }}
            onEvents={{
              click: (params: { name?: string | number }) => {
                const year = Number(params.name)
                if (!Number.isNaN(year)) {
                  setFilter({ yearRange: [year, year] })
                }
              },
            }}
            style={{ height: 260 }}
          />
        </ChartCard>

        <ChartCard title="类别占比">
          <ReactECharts
            option={{
              backgroundColor: 'transparent',
              tooltip: { trigger: 'item' },
              series: [
                {
                  type: 'pie',
                  radius: ['52%', '76%'],
                  label: { color: '#CBD5E1', fontSize: 11 },
                  labelLine: { lineStyle: { color: 'rgba(203,213,225,0.22)' } },
                  data: categoryDistribution.map((item) => ({
                    value: item.value,
                    name: item.name,
                    itemStyle: { color: item.color },
                  })),
                },
              ],
              graphic: [
                {
                  type: 'text',
                  left: 'center',
                  top: '40%',
                  style: {
                    text: `${categoryDistribution.reduce((sum, item) => sum + item.value, 0)}`,
                    fill: '#F8FAFC',
                    fontSize: 26,
                    fontFamily: 'Noto Serif SC',
                    fontWeight: 700,
                  },
                },
                {
                  type: 'text',
                  left: 'center',
                  top: '52%',
                  style: {
                    text: '遗产总数',
                    fill: '#94A3B8',
                    fontSize: 11,
                  },
                },
              ],
            }}
            onEvents={{
              click: (params: { name?: string }) => {
                const match = Object.entries(categoryMeta).find(
                  ([, meta]) => meta.label === params.name,
                )
                if (match) {
                  setFilter({ categories: [match[0] as keyof typeof categoryMeta] })
                }
              },
            }}
            style={{ height: 260 }}
          />
        </ChartCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-12">
        <ChartCard title="国家对比分析" className="xl:col-span-5">
          <ReactECharts
            option={{
              backgroundColor: 'transparent',
              tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
              grid: { left: 18, right: 18, top: 20, bottom: 12, containLabel: true },
              xAxis: { type: 'value', ...axisStyle },
              yAxis: {
                type: 'category',
                data: countryStats.slice(0, 8).map((item) => item.country).reverse(),
                axisLabel: { color: '#CBD5E1', fontSize: 11 },
                axisLine: { show: false },
                axisTick: { show: false },
              },
              series: [
                {
                  type: 'bar',
                  data: countryStats
                    .slice(0, 8)
                    .map((item, index) => ({
                      value: item.total,
                      name: item.country,
                      itemStyle: {
                        color: index < 3 ? '#C8A96A' : '#2F4A78',
                      },
                    }))
                    .reverse(),
                  barWidth: 14,
                },
              ],
            }}
            onEvents={{
              click: (params: { name?: string }) => {
                if (params.name) {
                  setFilter({ country: params.name })
                  setSelection(null)
                }
              },
            }}
            style={{ height: 280 }}
          />
        </ChartCard>

        <ChartCard title="区域类别结构" className="xl:col-span-4">
          <ReactECharts
            option={{
              backgroundColor: 'transparent',
              tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
              legend: {
                top: 0,
                right: 0,
                textStyle: { color: '#CBD5E1', fontSize: 11 },
              },
              grid: { left: 18, right: 18, top: 40, bottom: 12, containLabel: true },
              xAxis: { type: 'value', ...axisStyle },
              yAxis: {
                type: 'category',
                data: regionCategoryRows.map((item) => item.region).reverse(),
                axisLabel: { color: '#CBD5E1', fontSize: 11 },
                axisLine: { show: false },
                axisTick: { show: false },
              },
              series: [
                {
                  name: '文化',
                  type: 'bar',
                  stack: 'total',
                  data: regionCategoryRows.map((item) => item.culture).reverse(),
                  itemStyle: { color: '#F59E0B' },
                },
                {
                  name: '自然',
                  type: 'bar',
                  stack: 'total',
                  data: regionCategoryRows.map((item) => item.nature).reverse(),
                  itemStyle: { color: '#10B981' },
                },
                {
                  name: '混合',
                  type: 'bar',
                  stack: 'total',
                  data: regionCategoryRows.map((item) => item.mixed).reverse(),
                  itemStyle: { color: '#8B5CF6' },
                },
              ],
            }}
            onEvents={{
              click: (params: { name?: string }) => {
                if (params.name) {
                  setFilter({ region: params.name })
                }
              },
            }}
            style={{ height: 280 }}
          />
        </ChartCard>

        <ChartCard title="联动状态" className="xl:col-span-3">
          <div className="space-y-4 pt-2 text-sm leading-7 text-slate-300">
            <p>
              年份：
              <span className="ml-2 text-[var(--accent)]">
                {filter.yearRange[0]} - {filter.yearRange[1]}
              </span>
            </p>
            <p>区域：{filter.region === 'all' ? '全部' : filter.region}</p>
            <p>国家：{filter.country === 'all' ? '全部' : filter.country}</p>
            <p>类别：{filter.categories.length}</p>
          </div>
        </ChartCard>

        <ChartCard title="区域层级" className="xl:col-span-12">
          <ReactECharts
            option={{
              backgroundColor: 'transparent',
              tooltip: { formatter: '{b}: {c}' },
              series: [
                {
                  type: 'treemap',
                  roam: false,
                  breadcrumb: { show: false },
                  nodeClick: false,
                  label: { color: '#E2E8F0' },
                  upperLabel: { show: true, color: '#F8FAFC', height: 24 },
                  itemStyle: {
                    borderColor: 'rgba(255,255,255,0.12)',
                    borderWidth: 1,
                    gapWidth: 2,
                  },
                  color: ['#16213E', '#274C77', '#355C7D', '#C8A96A', '#8F6A35'],
                  data: regionTreemap,
                },
              ],
            }}
            onEvents={{
              click: (params: { treePathInfo?: Array<{ name: string }> }) => {
                const region = params.treePathInfo?.[1]?.name
                if (region) {
                  setFilter({ region })
                }
              },
            }}
            style={{ height: 320 }}
          />
        </ChartCard>
      </div>
    </section>
  )
}

function ChartCard({
  title,
  className,
  children,
}: React.PropsWithChildren<{
  title: string
  className?: string
}>) {
  return (
    <article
      className={[
        'rounded-xl border border-white/10 bg-[rgba(17,24,39,0.82)] p-4 shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-sm',
        className,
      ].join(' ')}
    >
      <header className="mb-2 flex items-end justify-between gap-4">
        <p className="font-display text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
          {title}
        </p>
      </header>
      {children}
    </article>
  )
}
