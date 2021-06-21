import { useRef } from "react"
import styled from "styled-components"

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })``

const Checkbox = ({ checked, indeterminate, value }) => {
  const checkboxEl = useRef(null)
  return (
    <StyledCheckbox
      ref={checkboxEl}
      {...{ checked, indeterminate, value }}
      onClick={() => console.log("checkbox clicked. checkbox checked status: ", checkboxEl.current.checked)}
    ></StyledCheckbox>
  )
}

export default Checkbox

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  value: "to-print",
}
