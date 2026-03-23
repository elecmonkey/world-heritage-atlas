export type HeritageCategory = 'culture' | 'nature' | 'mixed'

export type HeritageSite = {
  id: string
  name: string
  englishName?: string
  country: string
  countryCode: string
  region: string
  category: HeritageCategory
  year: number
  lat: number
  lng: number
  description: string
  shortDescription?: string
  image?: string
  criteria?: string[]
  sourceUrl?: string
  transnational?: boolean
  states?: string[]
  isoCodes?: string[]
  points?: number
  parentId?: string
}

export type FilterState = {
  yearRange: [number, number]
  categories: HeritageCategory[]
  region: string | 'all'
  country: string | 'all'
  keyword: string
}

export type SelectionState =
  | { type: 'site'; id: string }
  | { type: 'country'; country: string }
  | null

export type MetricItem = {
  label: string
  value: string
  hint: string
}

export type CountryStat = {
  country: string
  countryCode: string
  total: number
  culture: number
  nature: number
  mixed: number
}

export type RegionTreemapNode = {
  name: string
  value: number
  children: Array<{ name: string; value: number }>
}

export type RegionCategoryRow = {
  region: string
  culture: number
  nature: number
  mixed: number
  total: number
}
