import React from 'react'
import FormattedText from "./FormattedText"
import defaultUOM from "./units"

const TotalContent = ({cannabinoid,amount, uom=defaultUOM}) => {
  return (
    <FormattedText>{`Total ${cannabinoid}|${cannabinoid} Total: ${amount} ${uom}`}</FormattedText>
  )
}

export default TotalContent