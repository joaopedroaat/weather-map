import { GeocodeData, getGeocodeData } from './GeoCodeApi'
import { WeatherData, getWeatherData } from './WeatherApi'

export interface LocationData {
  geocodeData: GeocodeData | null
  weatherData: WeatherData | null
}

export const getLocationData = async (
  latitude: number,
  longitude: number,
): Promise<LocationData> => {
  const weatherData = await getWeatherData(latitude, longitude)
  const geocodeData = await getGeocodeData(latitude, longitude)
  return {
    weatherData,
    geocodeData,
  }
}
