import React from "react"
import loginStore from "./loginStore"
import { createContext } from "react"

class rootStore {
  constructor() {
    this.loginStore = new loginStore()
  }
}

const storeContext = createContext(new rootStore())
export const useStore = () => React.useContext(storeContext)

