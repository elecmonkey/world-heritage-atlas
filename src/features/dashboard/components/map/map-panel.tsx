import { divIcon, point } from 'leaflet'
import { useEffect, useMemo } from 'react'
import MarkerClusterGroup from 'react-leaflet-cluster'
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from 'react-leaflet'

import { useDashboardStore } from '../../../../app/store/dashboard-store'
import { categoryMeta } from '../../constants/theme'
import type { HeritageSite } from '../../types'

type MapPanelProps = {
  sites: HeritageSite[]
  selectedSiteId: string | null
  focusedCountry: string | null
  focusedSites: HeritageSite[]
}

const DEFAULT_CENTER: [number, number] = [22, 15]

type ClusterCategory = 'culture' | 'nature' | 'mixed'

export function MapPanel({
  sites,
  selectedSiteId,
  focusedCountry,
  focusedSites,
}: MapPanelProps) {
  const setHoveredSiteId = useDashboardStore((state) => state.setHoveredSiteId)
  const setSelection = useDashboardStore((state) => state.setSelection)
  const markers = useMemo(
    () =>
      sites.map((site) => {
        const meta = categoryMeta[site.category]
        const selected = site.id === selectedSiteId
        const dimmed = focusedCountry !== null && site.country !== focusedCountry
        const size = selected ? 18 : dimmed ? 8 : 12
        const icon = divIcon({
          html: '<span></span>',
          className: [
            'heritage-marker',
            `heritage-marker--${site.category}`,
            selected ? 'is-selected' : '',
            dimmed ? 'is-dimmed' : '',
          ]
            .filter(Boolean)
            .join(' '),
          iconSize: point(size, size),
          iconAnchor: point(size / 2, size / 2),
        })

        return { site, meta, selected, dimmed, icon }
      }),
    [focusedCountry, selectedSiteId, sites],
  )

  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(17,24,39,0.82)] shadow-[0_12px_28px_rgba(0,0,0,0.22)] xl:flex xl:h-full xl:min-h-0 xl:flex-col">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <p className="font-display text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
          Atlas
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          {Object.entries(categoryMeta).map(([key, item]) => (
            <span key={key} className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative h-[60vh] min-h-[420px] bg-[#0a0f16] xl:h-full xl:min-h-0 xl:flex-1">
        <MapContainer
          center={DEFAULT_CENTER}
          zoom={2}
          minZoom={2}
          maxZoom={8}
          zoomControl={false}
          worldCopyJump
          className="h-full w-full"
        >
          <LeafletPrefixControl />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          <MapViewport sites={sites} focusedSites={focusedSites} />

          <MarkerClusterGroup
            chunkedLoading
            spiderfyOnMaxZoom
            showCoverageOnHover={false}
            maxClusterRadius={36}
            iconCreateFunction={(
              cluster: Parameters<typeof createClusterIcon>[0],
            ) => createClusterIcon(cluster)}
          >
            {markers.map(({ site, meta, icon }) => (
              <Marker
                key={site.id}
                position={[site.lat, site.lng]}
                icon={icon}
                eventHandlers={{
                  mouseover: () => setHoveredSiteId(site.id),
                  mouseout: () => setHoveredSiteId(null),
                  click: () => setSelection({ type: 'site', id: site.id }),
                }}
              >
                <Tooltip direction="top" offset={[0, -2]} opacity={1}>
                  <div className="space-y-1 text-sm">
                    <strong className="block">{site.name}</strong>
                    <span className="block text-xs opacity-80">
                      {getDisplayCountries(site)} · {site.year} · {meta.label}
                    </span>
                  </div>
                </Tooltip>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(11,15,26,0.88)] to-transparent" />
      </div>
    </section>
  )
}

function createClusterIcon(cluster: {
  getChildCount: () => number
  getAllChildMarkers: () => Array<{
    options?: { icon?: { options?: { className?: string } } }
  }>
}) {
  const counts: Record<ClusterCategory, number> = {
    culture: 0,
    nature: 0,
    mixed: 0,
  }

  cluster.getAllChildMarkers().forEach((marker) => {
    const className = marker.options?.icon?.options?.className ?? ''
    if (className.includes('heritage-marker--culture')) {
      counts.culture += 1
      return
    }
    if (className.includes('heritage-marker--nature')) {
      counts.nature += 1
      return
    }
    if (className.includes('heritage-marker--mixed')) {
      counts.mixed += 1
    }
  })

  const dominant = (Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    'culture') as ClusterCategory
  const count = cluster.getChildCount()
  const size = count < 10 ? 34 : count < 100 ? 42 : 50

  return divIcon({
    html: `<span>${count}</span>`,
    className: `heritage-cluster heritage-cluster--${dominant}`,
    iconSize: point(size, size),
    iconAnchor: point(size / 2, size / 2),
  })
}

function MapViewport({
  sites,
  focusedSites,
}: {
  sites: HeritageSite[]
  focusedSites: HeritageSite[]
}) {
  const map = useMap()

  useEffect(() => {
    const targetSites = focusedSites.length > 0 ? focusedSites : sites

    if (targetSites.length === 0) {
      map.setView(DEFAULT_CENTER, 2)
      return
    }

    const bounds = targetSites.map((site) => [site.lat, site.lng] as [number, number])
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: focusedSites.length > 0 ? 5 : 4 })
  }, [focusedSites, map, sites])

  return null
}

function LeafletPrefixControl() {
  const map = useMap()

  useEffect(() => {
    map.attributionControl.setPrefix(false)
  }, [map])

  return null
}

function getDisplayCountries(site: HeritageSite) {
  return site.transnational && site.states && site.states.length > 1
    ? site.states.join(' / ')
    : site.country
}
