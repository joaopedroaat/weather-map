import { GeocodeData, getGeocodeData } from './GeocodeApi'
import { WeatherData, getWeatherData } from './WeatherApi'

export interface LatLng {
  lat: number
  lng: number
}
export interface LocationData {
  geocodeData: GeocodeData | null
  weatherData: WeatherData | null
}

export const getLocationData = async ({
  lat,
  lng,
}: LatLng): Promise<LocationData> => {
  const weatherData = await getWeatherData(lat, lng)
  const geocodeData = await getGeocodeData(lat, lng)
  return {
    weatherData,
    geocodeData,
  }
}
