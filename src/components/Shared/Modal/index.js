import { useCallback } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
/* context */
import { useModalContext, actions } from "components/Shared/Modal/context"

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`

const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const MOUNT_NODE = document.getElementById("root") || document.createElement("div")

const Modal = () => {
  // useEffect(() => console.log("modal rendered"), [])

  const [modalState, modalDispatch] = useModalContext()
  const handleClose = useCallback(() => {
    const action = { type: actions.HIDE_MODAL }
    modalDispatch(action)
  }, [])
  if (modalState.show)
    return createPortal(
      <Overlay onClick={handleClose}>
        <Dialog
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {modalState.message}
        </Dialog>
      </Overlay>,
      MOUNT_NODE
    )

  return null
}

export default Modal
