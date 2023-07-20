import { useEffect, useState } from 'react'
import { GlobeMap } from './components/GlobeMap/GlobeMap'
import { WeatherInfo } from './components/WeatherInfo/WeatherInfo'
import { LocationData, getLocationData } from './services/LocationService'

export function App() {
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    const fetchLocationData = async () => {
      const data = await getLocationData(latitude, longitude)
      setLocationData(data)
    }

    fetchLocationData()
  }, [latitude, longitude])

  const handleLocaleChange = (latitude: number, longitude: number) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: '0',
        position: 'relative',
      }}
    >
      {locationData && <WeatherInfo locationData={locationData} />}
      <GlobeMap handleLocaleChange={handleLocaleChange} />
    </div>
  )
}
