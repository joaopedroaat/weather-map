import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationMarker } from '../LocationMarker/LocationMarker'

import 'leaflet/dist/leaflet.css'

interface GlobeMapProps {
  handleLocaleChange: (latitude: number, longitude: number) => void
}

export function GlobeMap({ handleLocaleChange }: GlobeMapProps) {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: '100%', cursor: 'default' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker handleLocaleChange={handleLocaleChange} />
    </MapContainer>
  )
}
