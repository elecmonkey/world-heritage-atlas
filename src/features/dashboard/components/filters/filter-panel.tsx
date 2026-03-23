import * as Select from '@radix-ui/react-select'
import * as Slider from '@radix-ui/react-slider'
import { Check, ChevronDown, ChevronUp, RotateCcw, Search } from 'lucide-react'

import { DEFAULT_FILTER, useDashboardStore } from '../../../../app/store/dashboard-store'
import { cn } from '../../../../lib/utils'
import { regionOptions } from '../../constants/theme'

type FilterPanelProps = {
  countries: string[]
}

export function FilterPanel({ countries }: FilterPanelProps) {
  const filter = useDashboardStore((state) => state.filter)
  const setFilter = useDashboardStore((state) => state.setFilter)
  const resetFilter = useDashboardStore((state) => state.resetFilter)

  return (
    <aside className="space-y-6 rounded-xl border border-white/10 bg-[rgba(17,24,39,0.82)] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-sm xl:flex xl:h-full xl:flex-col">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.26em] text-[var(--accent)]">
            Filters
          </p>
        </div>
        <button
          type="button"
          onClick={resetFilter}
          className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-slate-300 transition hover:border-[var(--accent)]/40 hover:text-white"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          重置
        </button>
      </div>

      <section className="space-y-4">
        <header className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
          <span>年份范围</span>
          <span>{filter.yearRange[0]} - {filter.yearRange[1]}</span>
        </header>
        <Slider.Root
          value={filter.yearRange}
          min={1978}
          max={2024}
          step={1}
          minStepsBetweenThumbs={1}
          onValueChange={(value) =>
            setFilter({ yearRange: [value[0] ?? 1978, value[1] ?? 2024] })
          }
          className="relative flex h-8 w-full touch-none select-none items-center"
        >
          <Slider.Track className="relative h-[2px] grow bg-white/10">
            <Slider.Range className="absolute h-full bg-[var(--accent)]" />
          </Slider.Track>
          <Slider.Thumb className="block h-4 w-4 border border-[var(--accent)] bg-[var(--panel-2)] shadow" />
          <Slider.Thumb className="block h-4 w-4 border border-[var(--accent)] bg-[var(--panel-2)] shadow" />
        </Slider.Root>
      </section>

      <section className="space-y-3">
        <header className="text-xs uppercase tracking-[0.2em] text-slate-400">遗产类别</header>
        <div className="grid gap-2">
          {[
            { id: 'culture', label: '文化遗产' },
            { id: 'nature', label: '自然遗产' },
            { id: 'mixed', label: '混合遗产' },
          ].map((item) => {
            const checked = filter.categories.includes(item.id as typeof DEFAULT_FILTER.categories[number])
            return (
              <label
                key={item.id}
                className={cn(
                  'flex cursor-pointer items-center justify-between border px-3 py-3 text-sm transition',
                  checked
                    ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10 text-stone-100'
                    : 'border-white/10 text-slate-300 hover:border-white/20',
                )}
              >
                <span>{item.label}</span>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setFilter({ categories: [...filter.categories, item.id as never] })
                      return
                    }

                    const next = filter.categories.filter((category) => category !== item.id)
                    setFilter({ categories: next.length > 0 ? next : filter.categories })
                  }}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'inline-flex h-5 w-5 items-center justify-center border',
                    checked ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-white/15 text-transparent',
                  )}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
              </label>
            )
          })}
        </div>
      </section>

      <section className="space-y-3">
        <header className="text-xs uppercase tracking-[0.2em] text-slate-400">所属区域</header>
        <PanelSelect
          value={filter.region}
          onValueChange={(value) => setFilter({ region: value as typeof filter.region })}
          options={['all', ...regionOptions]}
        />
      </section>

      <section className="space-y-3">
        <header className="text-xs uppercase tracking-[0.2em] text-slate-400">国家</header>
        <PanelSelect
          value={filter.country}
          onValueChange={(value) => setFilter({ country: value as typeof filter.country })}
          options={['all', ...countries]}
        />
      </section>

      <section className="space-y-3 xl:mt-auto">
        <header className="text-xs uppercase tracking-[0.2em] text-slate-400">检索</header>
        <label className="flex items-center gap-3 border border-white/10 px-3 py-3 focus-within:border-[var(--accent)]/40">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            value={filter.keyword}
            onChange={(event) => setFilter({ keyword: event.target.value })}
            placeholder="搜索遗产名、国家或区域"
            className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />
        </label>
      </section>
    </aside>
  )
}

type PanelSelectProps = {
  value: string
  onValueChange: (value: string) => void
  options: readonly string[]
}

function PanelSelect({ value, onValueChange, options }: PanelSelectProps) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="flex w-full items-center justify-between border border-white/10 px-3 py-3 text-left text-sm text-slate-100 outline-none transition hover:border-white/20 data-[placeholder]:text-slate-500">
        <Select.Value placeholder="请选择" />
        <Select.Icon>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          sideOffset={8}
          collisionPadding={12}
          className="z-[1200] min-w-[var(--radix-select-trigger-width)] overflow-hidden border border-white/10 bg-[var(--panel)] p-1 text-sm text-slate-100 shadow-2xl"
        >
          <Select.ScrollUpButton className="flex h-7 items-center justify-center bg-[var(--panel)] text-slate-400">
            <ChevronUp className="h-4 w-4" />
          </Select.ScrollUpButton>
          <Select.Viewport className="max-h-64 overflow-y-auto">
            {options.map((option) => (
              <Select.Item
                key={option}
                value={option}
                className="cursor-pointer px-3 py-2 outline-none transition hover:bg-white/5 data-[state=checked]:bg-white/5 data-[state=checked]:text-[var(--accent)]"
              >
                <Select.ItemText>{option === 'all' ? '全部' : option}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex h-7 items-center justify-center bg-[var(--panel)] text-slate-400">
            <ChevronDown className="h-4 w-4" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
