import './WeatherInfo.css'

interface WeatherInfoProps {
  weatherData: unknown
}

export function WeatherInfo({ weatherData }: WeatherInfoProps) {
  return (
    <div className="weather-info">
      <p>{JSON.stringify(weatherData)}</p>
    </div>
  )
}
