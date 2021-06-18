import styled from 'styled-components'
import brandLogo from "assets/images/xtracts-logo-white.png"

const StyledImage = styled.img`
  height: 1.27cm;`

const BrandLogo = () => <StyledImage src={brandLogo} alt="Xtracts Logo"/>

export default BrandLogo