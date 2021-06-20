import React, { useEffect } from "react"
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

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetchStrapi("/flavors")
      console.log("strapi data response: ", res)
      const data = await res.json()
      console.log("strapi res data: ", data)
    }
    fetchData()
  }, [])
  return (
    <>
      <GlobalStyle />
      <Layout>
        <StyleAFront />
      </Layout>
    </>
  )
}

export default App
