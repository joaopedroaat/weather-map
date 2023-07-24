import { styled } from 'styled-components'

export const WeatherInfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  margin: 1rem;

  width: 300px;
  height: 150px;

  border: 1px solid black;
  background: white;

  z-index: 10000;

  background: ${(props) => props.theme.bg};
`
