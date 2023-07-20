import { LocationData } from '../../services/LocationService'
import './WeatherInfo.css'

interface WeatherInfoProps {
  locationData: LocationData
}

export function WeatherInfo({ locationData }: WeatherInfoProps) {
  const icon = locationData?.weatherData?.weather[0].icon

  return (
    <div className="weather-info">
      <p>
        {icon && (
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
        )}
      </p>
    </div>
  )
}
