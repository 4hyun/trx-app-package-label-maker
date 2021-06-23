import { css } from "styled-components"

const hideOnPrint = css`
  @media print {
    & {
      display: none !important;
    }
  }
`

export { hideOnPrint }
