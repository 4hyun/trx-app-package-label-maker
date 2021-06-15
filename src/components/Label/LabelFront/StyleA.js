import React from 'react'
import styled from 'styled-components'
import CombinedCannabinoidContent from "../CannabinoidContent" 
import Header from "components/Label/Header"
import Body from "components/Label/Body"
import HealthWarningMessage from '../HealthWarningMessage.js'

const THCContent = () => <CombinedCannabinoidContent {...{cannabinoid:"THC"}}/>

const CBDContent = () => <CombinedCannabinoidContent {...{cannabinoid:"CBD"}}/>

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 3in;
`

const LabelFrontStyleA = () => {
  return (
    <Container>
      <Header/>
      <Body>
        <THCContent/>
        <CBDContent/>
        <HealthWarningMessage/>
      </Body>
      LabelFrontStyleA footer
    </Container>
  )
}

export default LabelFrontStyleA
