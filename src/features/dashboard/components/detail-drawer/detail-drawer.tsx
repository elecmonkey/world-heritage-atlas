import { X } from 'lucide-react'

import { useDashboardStore } from '../../../../app/store/dashboard-store'
import type { HeritageSite } from '../../types'

type DetailDrawerProps = {
  selectedSite: HeritageSite | null
}

export function DetailDrawer({ selectedSite }: DetailDrawerProps) {
  const selection = useDashboardStore((state) => state.selection)
  const setSelection = useDashboardStore((state) => state.setSelection)

  if (selection?.type !== 'site') {
    return null
  }

  return (
    <aside
      aria-label="遗产详情"
      className="pointer-events-none fixed inset-y-0 right-0 z-[1500] flex w-full justify-end p-3 sm:p-4"
    >
      <div className="pointer-events-auto flex h-full w-full max-w-md flex-col border border-white/10 bg-[rgba(11,15,26,0.94)] p-5 text-slate-100 shadow-2xl shadow-black/50 outline-none backdrop-blur-xl sm:p-6">
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-display text-xl tracking-[0.08em] text-[var(--accent)]">
              Detail
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
              保持地图上下文，侧边查看证据
            </p>
          </div>
          <button
            type="button"
            aria-label="关闭详情"
            onClick={() => setSelection(null)}
            className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition hover:border-[var(--accent)]/40 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 min-h-0 flex-1 space-y-5 overflow-y-auto pr-1">
          {selectedSite ? (
            <>
              <section className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Site</p>
                <h3 className="font-display text-3xl text-stone-100">{selectedSite.name}</h3>
                {selectedSite.englishName ? (
                  <p className="text-sm text-slate-400">{selectedSite.englishName}</p>
                ) : null}
              </section>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <Meta label="国家" value={getDisplayCountries(selectedSite)} />
                <Meta label="区域" value={selectedSite.region} />
                <Meta label="类别" value={selectedSite.category} />
                <Meta label="年份" value={String(selectedSite.year)} />
                <Meta label="坐标" value={`${selectedSite.lat}, ${selectedSite.lng}`} />
                <Meta label="标准" value={selectedSite.criteria?.join(', ') ?? 'n/a'} />
              </dl>
              <section className="border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Description
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {selectedSite.description}
                </p>
              </section>
            </>
          ) : null}

          {!selectedSite ? (
            <section className="border border-dashed border-white/10 p-5 text-sm text-slate-400">
              暂无详情
            </section>
          ) : null}
        </div>
      </div>
    </aside>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-white/5 p-3">
      <dt className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</dt>
      <dd className="mt-2 text-slate-100">{value}</dd>
    </div>
  )
}

function getDisplayCountries(site: HeritageSite) {
  return site.transnational && site.states && site.states.length > 1
    ? site.states.join(' / ')
    : site.country
}
