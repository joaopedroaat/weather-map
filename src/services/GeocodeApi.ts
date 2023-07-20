import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENCAGE_DATA_API_KEY

export interface GeocodeData {
  city: string | null
  state: string | null
  country: string | null
}

export const getGeocodeData = async (
  latitude: number,
  longitude: number,
): Promise<GeocodeData | null> => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`,
    )
    const data = response.data
    if (data && data.results && data.results.length > 0) {
      const result = data.results[0]
      const components = result.components
      return {
        city: components.city || components.town || components.village || null,
        state: components.state || null,
        country: components.country || null,
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching geocode data:', error)
    return null
  }
}
