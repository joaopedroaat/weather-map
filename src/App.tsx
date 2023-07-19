import { GlobeMap } from './components/GlobeMap/GlobeMap'
import { WeatherInfo } from './components/WeatherInfo/WeatherInfo'

export function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: '0',
        position: 'relative',
      }}
    >
      <WeatherInfo />
      <GlobeMap />
    </div>
  )
}
