import styled from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"

const StyledCheckbox = styled(Checkbox)`
  @media print {
    display: none !important;
  }
`

const PrintCheckbox = ({ message, name, handleOnChange, size }) => {
  return (
    <StyledCheckbox {...{ message, size, name, onChange: handleOnChange }} inputProps={{ "aria-label": "checkbox slect to-print" }} disableRipple />
  )
}

export default PrintCheckbox

PrintCheckbox.defaultProps = {
  size: "medium",
  variant: "contained",
}
