import { create } from 'zustand'

import type { FilterState, SelectionState } from '../../features/dashboard/types'

const DEFAULT_FILTER: FilterState = {
  yearRange: [1978, 2024],
  categories: ['culture', 'nature', 'mixed'],
  region: 'all',
  country: 'all',
  keyword: '',
}

type DashboardStore = {
  filter: FilterState
  selection: SelectionState
  hoveredSiteId: string | null
  setFilter: (patch: Partial<FilterState>) => void
  resetFilter: () => void
  setSelection: (selection: SelectionState) => void
  setHoveredSiteId: (id: string | null) => void
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  filter: DEFAULT_FILTER,
  selection: null,
  hoveredSiteId: null,
  setFilter: (patch) =>
    set((state) => ({
      filter: { ...state.filter, ...patch },
    })),
  resetFilter: () => set({ filter: DEFAULT_FILTER, selection: null }),
  setSelection: (selection) => set({ selection }),
  setHoveredSiteId: (id) => set({ hoveredSiteId: id }),
}))

export { DEFAULT_FILTER }
