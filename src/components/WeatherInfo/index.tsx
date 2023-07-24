import { LocationData } from '../../services/LocationService'
import { GeolocationInfo, WeatherIcon, WeatherInfoContainer } from './styles'

interface WeatherInfoProps {
  locationData: LocationData | null
}

export function WeatherInfo({ locationData }: WeatherInfoProps) {
  return (
    <WeatherInfoContainer>
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
    </WeatherInfoContainer>
  )
}
