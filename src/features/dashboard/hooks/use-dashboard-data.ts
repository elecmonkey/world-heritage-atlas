import { useEffect, useState, useMemo } from 'react'

import { useDashboardStore } from '../../../app/store/dashboard-store'
import type { HeritageSite } from '../types'
import {
  expandTransnationalSites,
  filterSites,
  getCategoryDistribution,
  getCountryStats,
  getMetrics,
  getRegionCategoryRows,
  getRegionTreemap,
  getTrendSeries,
} from '../utils/dashboard-data'

export function useDashboardData() {
  const filter = useDashboardStore((state) => state.filter)
  const selection = useDashboardStore((state) => state.selection)
  const [sites, setSites] = useState<HeritageSite[]>([])

  useEffect(() => {
    let alive = true

    async function loadSites() {
      const response = await fetch('/data/sites.json')
      if (!response.ok) {
        throw new Error(`Failed to load sites.json: ${response.status}`)
      }

      const data = (await response.json()) as HeritageSite[]
      if (alive) {
        setSites(data)
      }
    }

    loadSites().catch((error) => {
      console.error(error)
      if (alive) {
        setSites([])
      }
    })

    return () => {
      alive = false
    }
  }, [])

  return useMemo(() => {
    const expandedSites = expandTransnationalSites(sites)
    const sharedFilter = { ...filter, country: 'all' as const }
    const filteredBaseSites = filterSites(sites, sharedFilter)
    const filteredExpandedSites = filterSites(expandedSites, filter)
    const filteredExpandedCountryScope = filterSites(expandedSites, sharedFilter)

    const filteredSites =
      filter.country === 'all' ? filteredBaseSites : filteredExpandedSites
    const countryStats = getCountryStats(filteredExpandedCountryScope)
    const trendSeries = getTrendSeries(filteredSites)
    const categoryDistribution = getCategoryDistribution(filteredSites)
    const regionTreemap = getRegionTreemap(filteredSites)
    const regionCategoryRows = getRegionCategoryRows(filteredSites)
    const metrics = getMetrics(filteredSites)

    const selectedSite =
      selection?.type === 'site'
        ? filteredSites.find((site) => site.id === selection.id) ??
          expandedSites.find((site) => site.id === selection.id) ??
          null
        : null

    const selectedCountryName = filter.country !== 'all' ? filter.country : null

    const selectedCountry =
      selectedCountryName
        ? countryStats.find((item) => item.country === selectedCountryName) ?? null
        : null

    const selectedCountrySites = selectedCountryName
      ? filteredExpandedSites.filter((site) => site.country === selectedCountryName)
      : []

    return {
      allSites: expandedSites,
      filteredSites,
      countryStats,
      trendSeries,
      categoryDistribution,
      regionTreemap,
      regionCategoryRows,
      metrics,
      selectedSite,
      selectedCountry,
      selectedCountrySites,
    }
  }, [filter, selection, sites])
}
