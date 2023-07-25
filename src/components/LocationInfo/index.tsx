import { LocationData } from '../../services/LocationService'
import {
  GeolocationInfo,
  LocationInfoContainer,
  WeatherIcon,
  WeatherInfo,
} from './styles'

interface WeatherInfoProps {
  locationData: LocationData | null
}

export function LocationInfo({ locationData }: WeatherInfoProps) {
  return (
    <LocationInfoContainer>
      <header>
        <WeatherIcon
          src={`http://openweathermap.org/img/wn/${locationData?.weatherData?.weather[0].icon}.png`}
          alt=""
        />
        <GeolocationInfo>
          <h1>{locationData?.geocodeData?.city}</h1>
          <small>
            {locationData?.geocodeData?.state},{' '}
            {locationData?.geocodeData?.country}
          </small>
        </GeolocationInfo>
      </header>
      <WeatherInfo>
        <h1>{locationData?.weatherData?.main.temp.toFixed(0)}&deg;</h1>
        <p>{locationData?.weatherData?.weather[0].description}</p>
      </WeatherInfo>
    </LocationInfoContainer>
  )
}
