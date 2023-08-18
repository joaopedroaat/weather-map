import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body, input, textarea, button {
    font: 500 1rem 'Roboto Mono', monospace;
    color: ${(props) => props.theme.fg};
  }

  .map-container {
    width: 100%;
    height: 100vh;
  }
`
