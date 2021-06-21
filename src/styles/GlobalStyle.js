import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
      --StandardizedCannabisSymbolRed: rgb(235,0,41);
    --HealthWarningMessageYellow: rgb(255,242,0);
  }

  .font-open-sans {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`

export default GlobalStyle

/* TODO: integrate GlobalStyles with App component */
