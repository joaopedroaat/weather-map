import { MapLoadingContainer } from './styles'

import loaderSvg from '../../assets/loader.svg'

export function MapLoading() {
  return (
    <MapLoadingContainer>
      <img src={loaderSvg} alt="" />
    </MapLoadingContainer>
  )
}
