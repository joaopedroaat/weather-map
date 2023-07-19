// services/weatherApi.ts
import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_MAP_API_KEY

const getWeatherData = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
    )
    return response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return null
  }
}

export default getWeatherData
