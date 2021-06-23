import { createContext, useContext, useReducer } from "react"

const ModalContext = createContext({})

const init = {}

export const actions = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
}

const reducer = (state, action) => {
  console.log(">>DEBUG modal reducer")
  switch (action.type) {
    case actions.SHOW_MODAL:
      return { ...state, ...action.payload, show: true }
    case actions.HIDE_MODAL:
      return { ...state, show: false }
    default:
      throw new Error("unexpected action type: ", action.type)
  }
}

const ModalContextProvider = ({ children }) => {
  const modalContextValue = useReducer(reducer, init)
  return <ModalContext.Provider value={modalContextValue}>{children}</ModalContext.Provider>
}

const useModalContext = () => useContext(ModalContext)

export { ModalContext, ModalContextProvider, useModalContext }
