import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobeMap } from './components/GlobeMap/GlobeMap'
import { LocationInfo } from './components/LocationInfo'
import { LocationData, getLocationData } from './services/LocationService'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Successfully got the location
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          },
          (error) => {
            // Failed to get the location
            console.error('Error getting location: ' + error.message)
          },
        )
      } else {
        console.error('Geolocation is not supported in this browser.')
      }
    }

    const fetchLocationData = async () => {
      if (latitude !== null && longitude !== null) {
        const data = await getLocationData(latitude, longitude)
        setLocationData(data)
      }
    }

    if (latitude === null && longitude === null) {
      getUserLocation()
    }

    fetchLocationData()
  }, [latitude, locationData, longitude])

  const handleLocaleChange = (latitude: number, longitude: number) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          margin: '0',
          position: 'relative',
        }}
      >
        <LocationInfo locationData={locationData} />
        <GlobeMap handleLocaleChange={handleLocaleChange} />
      </div>
    </ThemeProvider>
  )
}
