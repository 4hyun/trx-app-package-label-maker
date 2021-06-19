import React from "react"
import styled, { css } from "styled-components"
import CombinedCannabinoidContent from "../CannabinoidContent"
import Header from "components/Label/Header"
import Body from "components/Label/Body"
import HealthWarningMessage from "../HealthWarningMessage.js"

const THCContent = () => <CombinedCannabinoidContent {...{ cannabinoid: "THC" }} />

const CBDContent = () => <CombinedCannabinoidContent {...{ cannabinoid: "CBD" }} />

const CannabinoidContentContainer = styled.div`
  display: flex;
  padding-top: 8pt;
  padding-bottom: 8pt;
  justify-content: center;
`

const CombinedCannabinoidContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  width: 3in;
  height: fit-content;
`

const bodyWrapperStyles = css`
  margin-left: 16pt;
  margin-right: 16pt;
`

const Footer = styled.p`
  font-size: 8pt;
  text-align: right;
`

const LabelFrontStyleA = ({ packageContentDetails }) => {
  return (
    <Container>
      <Header />
      <Body wrapperStyle={bodyWrapperStyles}>
        <CannabinoidContentContainer>
          <CombinedCannabinoidContentWrapper>
            <THCContent />
          </CombinedCannabinoidContentWrapper>
          <CombinedCannabinoidContentWrapper>
            <CBDContent />
          </CombinedCannabinoidContentWrapper>
        </CannabinoidContentContainer>
        <HealthWarningMessage />
        <Footer>{packageContentDetails}</Footer>
      </Body>
    </Container>
  )
}

export default LabelFrontStyleA

LabelFrontStyleA.defaultProps = {
  packageContentDetails: "Contains 1 jar / Contient 1 pot",
}
