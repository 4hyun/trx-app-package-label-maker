import React from 'react'
import './App.css';
import {LabelFrontStyleA} from 'components/Label/LabelFront'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'

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
<GlobalStyle/>
    <Layout>
      <LabelFrontStyleA/>
    </Layout>
</>
)}

export default App;
