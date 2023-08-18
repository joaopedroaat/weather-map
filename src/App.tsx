import { ThemeProvider } from 'styled-components'
import { Map } from './components/Map'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          margin: '0',
          position: 'relative',
        }}
      >
        <Map />
      </div>
    </ThemeProvider>
  )
}
