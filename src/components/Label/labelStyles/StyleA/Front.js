import React from "react"
import styled, { css } from "styled-components"
import CombinedCannabinoidContent from "components/Label/CannabinoidContent"
import Header from "components/Label/Header"
import Body from "components/Label/Body"
import HealthWarningMessage from "components/Label/HealthWarningMessage"

const THCContent = () => <CombinedCannabinoidContent {...{ cannabinoid: "THC" }} />

const CBDContent = () => <CombinedCannabinoidContent {...{ cannabinoid: "CBD" }} />

const CannabinoidContentContainer = styled.div`
  display: flex;
  font-size: 6.32pt;
  font-weight: 600;
  padding-top: 8pt;
  padding-bottom: 8pt;
  justify-content: space-between;
`

const CombinedCannabinoidContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelContainer = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  width: 3in;
  min-width: 3in;
  height: 3.125in;
`

const bodyWrapperStyles = css`
  margin-left: 10pt;
  margin-right: 10pt;
`

const Footer = styled.p`
  margin-top: 0;
  font-size: 7.65pt;
  text-align: right;
`

const LabelFrontStyleA = ({ flavor, packageContentDetails }) => {
  return (
    <LabelContainer>
      <Header productTitle={flavor.name} />
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
        <Footer className="font-open-sans">{packageContentDetails}</Footer>
      </Body>
    </LabelContainer>
  )
}

export default LabelFrontStyleA

LabelFrontStyleA.defaultProps = {
  packageContentDetails: "Contains 1 jar / Contient 1 pot",
}
