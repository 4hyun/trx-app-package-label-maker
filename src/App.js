import React from "react"
import "./App.css"
import StyleAFront from "components/Label/labelStyles/StyleA/Front"
import styled from "styled-components"
import GlobalStyle from "styles/GlobalStyle"

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 10%;
`

function App() {
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
