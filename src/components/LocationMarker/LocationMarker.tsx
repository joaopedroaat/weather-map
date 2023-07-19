import { LatLngExpression, LeafletMouseEvent } from 'leaflet'
import { useState } from 'react'
import { Marker, useMapEvents } from 'react-leaflet'

interface LocationMarkerProps {
  handleLocaleChange: (latitude: number, longitude: number) => void
}

export function LocationMarker({ handleLocaleChange }: LocationMarkerProps) {
  const [position, setPosition] = useState<null | LatLngExpression>(null)
  useMapEvents({
    click(evt: LeafletMouseEvent) {
      const { lat, lng } = evt.latlng
      setPosition([lat, lng])
      handleLocaleChange(lat, lng)
    },
  })

  return position && <Marker position={position} />
}
