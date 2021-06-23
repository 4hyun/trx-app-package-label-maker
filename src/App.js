import React, { useEffect, useCallback, useState, useMemo } from "react"
import "./App.css"
import styled from "styled-components"
import GlobalStyle from "styles/GlobalStyle"
import fetchStrapi from "lib/api/strapi"
/* contexts */
import { ModalContextProvider } from "components/Shared/Modal/context"
/* components */
import Modal from "components/Shared/Modal"
import StyleAFront from "components/Label/labelStyles/StyleA/Front"
import PrintButton from "components/Shared/Button/PrintButton"
import PrintCheckbox from "components/Shared/PrintCheckbox"

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  row-gap: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`

const ControlGroupContainer = styled.div`
  display: flex;
  width: 100%;
`

const InnerLayout = styled.div`
  ${"" /* width: 100%; */}
  min-height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`

const LabelContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media print {
    display: none;
    &.to-print {
      display: initial;
    }
  }
`
const LabelContainer = ({ children }) => {
  const [checked, setChecked] = useState(null)
  return (
    <LabelContainerWrapper className={checked ? "to-print" : ""}>
      {children}
      <PrintCheckbox
        handleOnChange={(e) => {
          setChecked(e.target.checked)
        }}
      />
    </LabelContainerWrapper>
  )
}

function App() {
  const [flavors, setFlavors] = useState(null)
  const checkSelectedToPrint = () => {
    return document.querySelectorAll(".to-print").length > 0
  }
  const fetchFlavors = useCallback(async () => {
    const res = await fetchStrapi("/flavors")
    const data = await res.json()
    return data
  }, [])

  const handleFlavorsFetch = useCallback(async () => {
    const flavorsResp = await fetchFlavors()
    setFlavors(flavorsResp)
  }, [fetchFlavors])
  useEffect(() => {
    handleFlavorsFetch()
  }, [handleFlavorsFetch])
  return (
    <>
      <GlobalStyle />
      <ModalContextProvider>
        <Layout>
          <ControlGroupContainer>
            <PrintButton checkSelectedToPrint={checkSelectedToPrint} />
          </ControlGroupContainer>
          <InnerLayout>
            {flavors &&
              flavors.map((flavor) => (
                <LabelContainer>
                  <StyleAFront flavor={flavor} />
                </LabelContainer>
              ))}
          </InnerLayout>
        </Layout>
        <Modal />
      </ModalContextProvider>
    </>
  )
}

export default App
