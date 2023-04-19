import { useState } from "react"
import { UIContext } from "./"


export const UIProvider = ({ children }) => {

  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <UIContext.Provider value={{ openSideBar, setOpenSideBar }} >
      { children }
    </UIContext.Provider>
    )
}
