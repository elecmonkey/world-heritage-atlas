import { categoryMeta } from '../constants/theme'
import type {
  CountryStat,
  FilterState,
  HeritageCategory,
  HeritageSite,
  MetricItem,
  RegionCategoryRow,
  RegionTreemapNode,
} from '../types'

export function expandTransnationalSites(sites: HeritageSite[]) {
  return sites.flatMap((site) => {
    if (!site.transnational || !site.states || site.states.length <= 1) {
      return [site]
    }

    return site.states.map((state, index) => ({
      ...site,
      id: `${site.id}-${site.isoCodes?.[index] ?? index}`,
      country: state,
      countryCode: (site.isoCodes?.[index] ?? site.countryCode).toUpperCase(),
      parentId: site.id,
    }))
  })
}

export function filterSites(sites: HeritageSite[], filter: FilterState) {
  const keyword = filter.keyword.trim().toLowerCase()

  return sites.filter((site) => {
    const inYear =
      site.year >= filter.yearRange[0] && site.year <= filter.yearRange[1]
    const inCategory = filter.categories.includes(site.category)
    const inRegion = filter.region === 'all' || site.region === filter.region
    const inCountry = filter.country === 'all' || site.country === filter.country
    const inKeyword =
      keyword.length === 0 ||
      [site.name, site.englishName, site.country, site.region]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(keyword)

    return inYear && inCategory && inRegion && inCountry && inKeyword
  })
}

export function getCountryStats(sites: HeritageSite[]) {
  const grouped = new Map<string, CountryStat>()

  sites.forEach((site) => {
    const current = grouped.get(site.country) ?? {
      country: site.country,
      countryCode: site.countryCode,
      total: 0,
      culture: 0,
      nature: 0,
      mixed: 0,
    }

    current.total += 1
    current[site.category] += 1
    grouped.set(site.country, current)
  })

  return Array.from(grouped.values()).sort((a, b) => b.total - a.total)
}

export function getTrendSeries(sites: HeritageSite[]) {
  const byYear = new Map<number, number>()

  sites.forEach((site) => {
    byYear.set(site.year, (byYear.get(site.year) ?? 0) + 1)
  })

  const entries = Array.from(byYear.entries()).sort((a, b) => a[0] - b[0])

  return {
    years: entries.map(([year]) => year),
    values: entries.map(([, count]) => count),
  }
}

export function getCategoryDistribution(sites: HeritageSite[]) {
  return (Object.keys(categoryMeta) as HeritageCategory[]).map((key) => ({
    name: categoryMeta[key].label,
    value: sites.filter((site) => site.category === key).length,
    color: categoryMeta[key].color,
    key,
  }))
}

export function getRegionTreemap(sites: HeritageSite[]) {
  const grouped = new Map<string, Map<string, number>>()

  sites.forEach((site) => {
    const regionGroup = grouped.get(site.region) ?? new Map<string, number>()
    regionGroup.set(site.country, (regionGroup.get(site.country) ?? 0) + 1)
    grouped.set(site.region, regionGroup)
  })

  return Array.from(grouped.entries()).map<RegionTreemapNode>(([name, countries]) => {
    const children = Array.from(countries.entries())
      .map(([country, value]) => ({ name: country, value }))
      .sort((a, b) => b.value - a.value)

    return {
      name,
      value: children.reduce((sum, item) => sum + item.value, 0),
      children,
    }
  })
}

export function getRegionCategoryRows(sites: HeritageSite[]) {
  const grouped = new Map<string, RegionCategoryRow>()

  sites.forEach((site) => {
    const row = grouped.get(site.region) ?? {
      region: site.region,
      culture: 0,
      nature: 0,
      mixed: 0,
      total: 0,
    }

    row[site.category] += 1
    row.total += 1
    grouped.set(site.region, row)
  })

  return Array.from(grouped.values()).sort((a, b) => b.total - a.total)
}

export function getMetrics(sites: HeritageSite[]): MetricItem[] {
  const countries = new Set(sites.map((site) => site.country))
  const oldest = sites.length > 0 ? Math.min(...sites.map((site) => site.year)) : '-'
  const cultureShare =
    sites.length > 0
      ? `${Math.round(
          (sites.filter((site) => site.category === 'culture').length / sites.length) *
            100,
        )}%`
      : '0%'

  return [
    {
      label: '遗产总量',
      value: String(sites.length),
      hint: '当前筛选结果',
    },
    {
      label: '覆盖国家',
      value: String(countries.size),
      hint: '地图可见范围',
    },
    {
      label: '最早年份',
      value: String(oldest),
      hint: '入选时间起点',
    },
    {
      label: '文化类占比',
      value: cultureShare,
      hint: 'culture 占全部比例',
    },
  ]
}
