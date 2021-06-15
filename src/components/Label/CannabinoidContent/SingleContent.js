import React from 'react'
import FormattedText from "./FormattedText"
import defaultUOM from "./units"

const SingleContent = ({cannabinoid,amount, uom=defaultUOM}) => {
  return (
    <FormattedText>{`${cannabinoid}: ${amount} ${uom}`}</FormattedText>
  )
}

export default SingleContent
