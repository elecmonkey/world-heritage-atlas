import type { HeritageCategory } from '../types'

export const categoryMeta: Record<
  HeritageCategory,
  { label: string; color: string }
> = {
  culture: { label: '文化遗产', color: '#F59E0B' },
  nature: { label: '自然遗产', color: '#10B981' },
  mixed: { label: '混合遗产', color: '#8B5CF6' },
}

export const regionOptions = [
  'Asia-Pacific',
  'Europe-North America',
  'Latin America-Caribbean',
  'Arab States',
  'Africa',
] as const
