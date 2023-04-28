import StoreProvider from "@woovi/stores/src/adapters/react/provider"
import { ReactNode } from "react"

export default function PixLayout(props: {
  children: ReactNode
  params: { id: string }
}) {
  return (
    <StoreProvider>
      {props.children}
      <span className="text-center text-dark-company-200">
        Identificador <br />
        <strong className="text-dark-company-400">{props.params.id}</strong>
      </span>
    </StoreProvider>
  )
}
