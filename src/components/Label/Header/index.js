import styled from "styled-components"
import StandardizedCannabisSymbol from "./StandardizedCannabisSymbol"
import ProductTitle from "./ProductTitle"
import BrandLogo from "./BrandLogo"

export { default as ProductTitle } from "./ProductTitle"
export { default as StandardizedCannabisSymbol } from "./StandardizedCannabisSymbol"
export { default as BrandLogo } from "./BrandLogo"

export const Wrapper = styled.div`
  display: flex;
  background: #3f9b39;
  justify-content: space-between;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 16pt;
  padding-right: 16pt;
`

const StyledCannabisSymbol = styled(StandardizedCannabisSymbol)`
  width: 1.27cm;
  height: 1.27cm;
`

const Header = ({ productTitle }) => (
  <Wrapper>
    <StyledCannabisSymbol />
    <ProductTitle className="font-open-sans">{productTitle}</ProductTitle>
    <BrandLogo />
  </Wrapper>
)

export default Header

Header.defaultProps = { productTitle: "Product Title Goes Here." }
