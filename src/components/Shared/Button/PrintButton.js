import { useCallback } from "react"
import styled from "styled-components"
import { NOTHING_TO_PRINT } from "components/Shared/Modal/messages"
/* sharedStyles */
import { hideOnPrint } from "components/Shared/sharedStyles"
/* context */
import { useModalContext, actions } from "components/Shared/Modal/context"
/* components */
import BaseButton from "components/Shared/Button/Base"

const Button = styled(BaseButton).attrs({ className: "font-open-sans" })`
  font-size: 10pt;
  font-weight: bold;
  ${hideOnPrint}
`

const PrintButton = ({ text, checkSelectedToPrint }) => {
  const [modalState, modalDispatch] = useModalContext()

  const showPrintModal = useCallback(() => {
    if (checkSelectedToPrint()) return window.print()
    const action = {
      type: actions.SHOW_MODAL,
      payload: { message: NOTHING_TO_PRINT },
    }
    return modalDispatch(action)
  }, [checkSelectedToPrint])

  return <Button onClick={showPrintModal}>{text}</Button>
}

export default PrintButton

PrintButton.defaultProps = { text: "print" }
