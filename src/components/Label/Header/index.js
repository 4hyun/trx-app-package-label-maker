import styled from "styled-components"
import StandardizedCannabisSymbol from "./StandardizedCannabisSymbol"
import ProductTitle from "./ProductTitle"
import BrandLogo from "./BrandLogo"

export {default as ProductTitle} from "./ProductTitle";
export {default as StandardizedCannabisSymbol} from "./StandardizedCannabisSymbol";
export {default as BrandLogo} from "./BrandLogo"

export const Wrapper = styled.div`
display: flex;`

const StyledCannabisSymbol = styled(StandardizedCannabisSymbol)`
  width: 1.27cm;
  height: 1.27cm;
`

const Header = () => <Wrapper>
  <StyledCannabisSymbol/><ProductTitle>Product Title Goes Here</ProductTitle><BrandLogo/>
</Wrapper>

export default Header