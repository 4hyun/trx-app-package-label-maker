import styled from "styled-components"

import BaseButton from "components/Shared/Button/Base"

const Button = styled(BaseButton).attrs({ className: "font-open-sans" })`
  font-size: 10pt;
  font-weight: bold;
`

const PrintButton = ({ text }) => <Button onClick={window.print}>{text}</Button>

export default PrintButton

PrintButton.defaultProps = { text: "print" }
