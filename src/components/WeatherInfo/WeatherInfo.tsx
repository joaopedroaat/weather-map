import { WeatherData } from '../../services/WeatherApi'
import './WeatherInfo.css'

interface WeatherInfoProps {
  country?: string
  state?: string
  city?: string
  weatherData: WeatherData | null
}

export function WeatherInfo({ weatherData }: WeatherInfoProps) {
  const icon = weatherData?.weather[0]?.icon

  return (
    <div className="weather-info">
      <p>
        {weatherData?.weather[0].icon && (
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
        )}
      </p>
    </div>
  )
}
