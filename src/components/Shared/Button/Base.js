import styled, { css } from "styled-components"
import Button from "@material-ui/core/Button"

const initStyles = css`
  padding: 0.25rem 0.45rem;
`

const BaseButton = styled(Button)`
  ${initStyles}
`

export default BaseButton

BaseButton.defaultProps = { color: "primary", size: "medium", variant: "contained" }
