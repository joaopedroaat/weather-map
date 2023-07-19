import { useEffect, useState } from 'react'
import { GlobeMap } from './components/GlobeMap/GlobeMap'
import { WeatherInfo } from './components/WeatherInfo/WeatherInfo'
import getWeatherData from './services/WeatherApi'

export function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(latitude, longitude)
      console.log(data)
      setWeatherData(data)
    }
    fetchWeatherData()
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
