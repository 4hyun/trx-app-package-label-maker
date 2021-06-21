import React, { useEffect, useCallback, useState } from "react"
import "./App.css"
import StyleAFront from "components/Label/labelStyles/StyleA/Front"
import styled from "styled-components"
import GlobalStyle from "styles/GlobalStyle"
import fetchStrapi from "lib/api/strapi"

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 10%;
`

const InnerLayout = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-start;
  & > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  flex-wrap: wrap;
`

function App() {
  const [flavors, setFlavors] = useState(null)
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
      <Layout>
        <InnerLayout>{flavors && flavors.map((flavor) => <StyleAFront flavor={flavor} />)}</InnerLayout>
      </Layout>
    </>
  )
}

export default App
