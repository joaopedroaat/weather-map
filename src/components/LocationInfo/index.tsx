import { useEffect, useState } from 'react'
import {
  LatLng,
  LocationData,
  getLocationData,
} from '../../services/LocationService'
import {
  GeolocationInfo,
  LocationInfoContainer,
  WeatherIcon,
  WeatherInfo,
} from './styles'

import loaderSvg from '../../assets/loader.svg'
interface WeatherInfoProps {
  location: LatLng
}

export function LocationInfo({ location }: WeatherInfoProps) {
  const [locationData, setLocationData] = useState<LocationData>({
    geocodeData: null,
    weatherData: null,
  })

  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        setIsLoading(true)
        const data = await getLocationData(location)
        setLocationData(data)
      } catch (error) {
        console.error('Error fetching location data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLocationData()
  }, [location])

  if (isLoading)
    return (
      <LocationInfoContainer>
        <img src={loaderSvg} width={75} height={75} alt="" />
      </LocationInfoContainer>
    )

  return (
    <LocationInfoContainer>
      <header>
        <WeatherIcon
          src={`http://openweathermap.org/img/wn/${locationData?.weatherData?.weather[0].icon}.png`}
          alt=""
        />
        <GeolocationInfo>
          <h1>{locationData?.geocodeData?.city || 'Not identified'}</h1>
          <small>
            {locationData?.geocodeData?.state || 'Not identified'},{' '}
            {locationData?.geocodeData?.country || 'Not identified'}
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
