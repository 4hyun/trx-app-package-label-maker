import { useCallback, useContext } from "react"
import styled from "styled-components"
import { NOTHING_TO_PRINT } from "components/Shared/Modal/messages"

import { useModalContext, actions } from "components/Shared/Modal/context"

import BaseButton from "components/Shared/Button/Base"

const Button = styled(BaseButton).attrs({ className: "font-open-sans" })`
  font-size: 10pt;
  font-weight: bold;
`

const PrintButton = ({ text, checkSelectedToPrint }) => {
  const [modalState, modalDispatch] = useModalContext()

  const showPrintModal = useCallback(() => {
    if (checkSelectedToPrint()) return window.print()
    const action = {
      type: actions.SHOW_MODAL,
      payload: { message: "No labels selected. Please select(checkbox) labels to print." },
    }
    return modalDispatch(action)
  }, [checkSelectedToPrint])

  return <Button onClick={showPrintModal}>{text}</Button>
}

export default PrintButton

PrintButton.defaultProps = { text: "print" }
