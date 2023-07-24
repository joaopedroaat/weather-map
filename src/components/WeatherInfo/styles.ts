import { styled } from 'styled-components'

export const WeatherInfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  margin: 1rem;

  width: 270px;
  height: 90px;

  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  z-index: 10000;

  background: ${(props) => props.theme.bg};

  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem;
  }
`
export const WeatherIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  background: ${(props) => props.theme.blue};
  border-radius: 50%;
`
export const GeolocationInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.2rem;
  }
`
