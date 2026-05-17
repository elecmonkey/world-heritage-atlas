import { BarChart3, Globe2, Landmark, MapPinned, Sparkles } from 'lucide-react'
import { useMemo } from 'react'

import { DetailDrawer } from './detail-drawer/detail-drawer'
import { FilterPanel } from './filters/filter-panel'
import { useDashboardData } from '../hooks/use-dashboard-data'
import { MapPanel } from './map/map-panel'
import { ChartsGrid } from './charts/charts-grid'

export function DashboardPage() {
  const {
    allSites,
    filteredSites,
    trendSeries,
    categoryDistribution,
    countryStats,
    regionTreemap,
    regionCategoryRows,
    metrics,
    selectedSite,
    selectedCountry,
    selectedCountrySites,
  } = useDashboardData()

  const countries = useMemo(
    () => Array.from(new Set(allSites.map((site) => site.country))).sort(),
    [allSites],
  )

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      <div className="mx-auto flex min-h-screen max-w-[1680px] flex-col gap-4 px-3 py-3 md:px-5 md:py-5 xl:px-6">
        <header className="flex items-center justify-between rounded-xl border border-white/10 bg-[rgba(17,24,39,0.82)] px-5 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
              <Landmark className="h-4 w-4" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="font-display text-lg tracking-[0.08em] text-stone-100">
                世界文化遗产可视化系统
              </h1>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                World Heritage Atlas
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400 md:flex">
            <MapPinned className="h-4 w-4 text-[var(--accent)]" />
            <span>{filteredSites.length} Sites</span>
          </div>
        </header>

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[rgba(17,24,39,0.78)] p-4 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-sm"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent opacity-60" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-display text-3xl leading-none text-stone-100">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{metric.hint}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--accent)] transition group-hover:border-[var(--accent)]/40">
                  {index === 0 ? <BarChart3 className="h-4 w-4" /> : null}
                  {index === 1 ? <Globe2 className="h-4 w-4" /> : null}
                  {index === 2 ? <MapPinned className="h-4 w-4" /> : null}
                  {index === 3 ? <Sparkles className="h-4 w-4" /> : null}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 xl:min-h-[68vh] xl:grid-cols-[320px_minmax(0,1fr)] xl:items-stretch">
          <FilterPanel countries={countries} />
          <MapPanel
            sites={filteredSites}
            selectedSiteId={selectedSite?.id ?? null}
            focusedCountry={selectedCountry?.country ?? null}
            focusedSites={selectedCountrySites}
          />
        </section>

        <ChartsGrid
          trendSeries={trendSeries}
          categoryDistribution={categoryDistribution}
          countryStats={countryStats}
          regionTreemap={regionTreemap}
          regionCategoryRows={regionCategoryRows}
        />
      </div>

      <DetailDrawer selectedSite={selectedSite} />
    </main>
  )
}
