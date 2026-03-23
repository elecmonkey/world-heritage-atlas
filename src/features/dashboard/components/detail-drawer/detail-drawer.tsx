import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { useDashboardStore } from '../../../../app/store/dashboard-store'
import type { HeritageSite } from '../../types'

type DetailDrawerProps = {
  selectedSite: HeritageSite | null
}

export function DetailDrawer({
  selectedSite,
}: DetailDrawerProps) {
  const selection = useDashboardStore((state) => state.selection)
  const setSelection = useDashboardStore((state) => state.setSelection)

  return (
    <Dialog.Root
      open={selection?.type === 'site'}
      onOpenChange={(open) => {
        if (!open) {
          setSelection(null)
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[1400] bg-black/40 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed right-0 top-0 z-[1500] h-full w-full max-w-md border-l border-white/10 bg-[rgba(11,15,26,0.96)] p-6 text-slate-100 shadow-2xl outline-none">
          <div className="flex items-start justify-between border-b border-white/10 pb-4">
            <Dialog.Title className="font-display text-xl tracking-[0.08em] text-[var(--accent)]">
              Detail
            </Dialog.Title>
            <Dialog.Close className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition hover:text-white">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          <div className="mt-6 space-y-5">
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
                  <Meta
                    label="标准"
                    value={selectedSite.criteria?.join(', ') ?? 'n/a'}
                  />
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
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
