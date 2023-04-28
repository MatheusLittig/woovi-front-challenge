"use client"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../../"

const StoreProvider = ({ children }: { children: ReactNode }) =>
  Provider({ store, children })

export default StoreProvider
