// services/weatherApi.ts
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

const API_KEY = import.meta.env.VITE_WEATHER_MAP_API_KEY

export interface WeatherData {
  weather: [
    {
      main: string
      description: string
      icon: string
    },
  ]
  main: {
    temp: number
    feelsLike: number
    tempMin: number
    tempMax: number
  }
}

export const getWeatherData = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${API_KEY}`,
    )
    return camelcaseKeys(await response.data, { deep: true })
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return null
  }
}
