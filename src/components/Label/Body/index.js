import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  ${({wrapperStyle}) => wrapperStyle}
`

const Body = ({children, wrapperStyle ={}}) => {
  return (
    <Wrapper wrapperStyle={wrapperStyle}>
      {children}
    </Wrapper>
  )
}

export default Body
