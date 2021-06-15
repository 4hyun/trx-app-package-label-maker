import SingleContent from "./SingleContent"
import TotalContent from "./TotalContent"

export const cannabinoidTHC = "THC"
export const cannabinoidCBD = "CBD"
const placeholderAmount = 0.0

const CannabinoidContent = ({cannabinoid,amount=placeholderAmount}) => <SingleContent {...{cannabinoid, amount}}/>

const CannabinoidTotalContent = ({cannabinoid,amount=placeholderAmount}) => <TotalContent {...{cannabinoid,amount}}/>

const CombinedCannabinoidContent = ({cannabinoid,amount=placeholderAmount}) => <>
  <CannabinoidContent {...{cannabinoid, amount}}/>
  <CannabinoidTotalContent {...{cannabinoid, amount}}/>
</>

export {CannabinoidContent,CannabinoidTotalContent}
export default CombinedCannabinoidContent