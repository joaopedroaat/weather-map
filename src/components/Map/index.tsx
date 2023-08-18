import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import { LatLng } from '../../services/LocationService'
import { LocationInfo } from '../LocationInfo'
import { MapError } from '../MapError'
import { MapLoading } from '../MapLoading'

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

export function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
  })

  const [userLocation, setUserLocation] = useState<LatLng>({
    lat: 0,
    lng: 0,
  })

  const [markerPosition, setMarkerPosition] = useState<LatLng>({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ lat: latitude, lng: longitude })
          setMarkerPosition({ lat: latitude, lng: longitude })
        },
        (error) => {
          console.error('Error getting user location:', error)
        },
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const clickedLatLng: LatLng = {
      lat: event.latLng?.lat() || 0,
      lng: event.latLng?.lng() || 0,
    }
    setMarkerPosition(clickedLatLng)
  }

  if (loadError) return <MapError />

  if (!isLoaded) return <MapLoading />

  return (
    <GoogleMap
      zoom={10}
      center={userLocation}
      mapContainerClassName="map-container"
      options={{ disableDefaultUI: true }}
      onClick={handleMapClick}
    >
      <LocationInfo location={markerPosition} />
      <MarkerF position={markerPosition} />
    </GoogleMap>
  )
}
