import { LocationData } from '../../services/LocationService'
import { WeatherInfoContainer } from './styles'

interface WeatherInfoProps {
  locationData: LocationData | null
}

export function WeatherInfo({ locationData }: WeatherInfoProps) {
  return (
    <WeatherInfoContainer>
      <p>Hello Styled</p>
    </WeatherInfoContainer>
  )
}
