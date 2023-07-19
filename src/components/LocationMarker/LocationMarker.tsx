import { LatLngExpression, LeafletMouseEvent } from 'leaflet'
import { useState } from 'react'
import { Marker, useMapEvents } from 'react-leaflet'

export function LocationMarker() {
  const [position, setPosition] = useState<null | LatLngExpression>(null)
  useMapEvents({
    click(evt: LeafletMouseEvent) {
      setPosition(evt.latlng)
    },
  })

  return position && <Marker position={position} />
}
