import axios from 'axios'

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

export interface GeocodeData {
  country: string | undefined
  state: string | undefined
  city: string | undefined
}

interface AddressComponent {
  long_name: string
  short_name: string
  types: string[]
}

interface GeocodingResult {
  address_components: AddressComponent[]
}

interface GeocodingResponse {
  results: GeocodingResult[]
}

export const getGeocodeData = async (
  latitude: number,
  longitude: number,
): Promise<GeocodeData | null> => {
  try {
    const response = await axios.get<GeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`,
    )
    const data = response.data
    if (data && data.results && data.results.length > 0) {
      const result = data.results[0]
      const addressComponents = result.address_components
      return {
        country: addressComponents.find((component) =>
          component.types.includes('country'),
        )?.long_name,
        state: addressComponents.find((component) =>
          component.types.includes('administrative_area_level_1'),
        )?.long_name,
        city: addressComponents.find((component) =>
          component.types.includes('locality'),
        )?.long_name,
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching geocode data:', error)
    return null
  }
}
