import { WeatherData } from '../../services/WeatherApi'
import './WeatherInfo.css'

interface WeatherInfoProps {
  country?: string
  state?: string
  city?: string
  weatherData: WeatherData | null
}

export function WeatherInfo({ weatherData }: WeatherInfoProps) {
  return (
    <div className="weather-info">
      <p>{weatherData?.main.temp}</p>
    </div>
  )
}
