import { GeocodeData, getGeocodingData } from './GeocodingApi'
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
  const geocodeData = await getGeocodingData(lat, lng)
  return {
    weatherData,
    geocodeData,
  }
}
