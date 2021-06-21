import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  ${({ wrapperStyle }) => wrapperStyle}
`

const Body = ({ children, wrapperStyle = {} }) => {
  return (
    <Wrapper wrapperStyle={wrapperStyle} className="font-open-sans">
      {children}
    </Wrapper>
  )
}

export default Body
