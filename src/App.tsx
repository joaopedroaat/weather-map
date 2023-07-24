import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobeMap } from './components/GlobeMap/GlobeMap'
import { WeatherInfo } from './components/WeatherInfo'
import { LocationData, getLocationData } from './services/LocationService'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

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
        <WeatherInfo locationData={locationData} />
        <GlobeMap handleLocaleChange={handleLocaleChange} />
      </div>
    </ThemeProvider>
  )
}
