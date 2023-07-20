import { useEffect, useState } from 'react'
import { GlobeMap } from './components/GlobeMap/GlobeMap'
import { WeatherInfo } from './components/WeatherInfo/WeatherInfo'
import getGeocodeData from './services/GeoCodeApi'
import getWeatherData, { WeatherData } from './services/WeatherApi'

export function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(latitude, longitude)
      setWeatherData(data)
    }

    const fetchGeocodeData = async () => {
      const data = await getGeocodeData(latitude, longitude)
      console.log(data)
    }

    fetchWeatherData()
    fetchGeocodeData()
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
      <WeatherInfo weatherData={weatherData} />
      <GlobeMap handleLocaleChange={handleLocaleChange} />
    </div>
  )
}
