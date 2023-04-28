import StoreProvider from "@woovi/stores/src/adapters/react/provider"
import { ReactNode } from "react"

export default function PixLayout(props: {
  children: ReactNode
  params: { id: string }
}) {
  return (
    <StoreProvider>
      {props.children}
      <span className="text-center">
        Identificador <br />
        <strong>{props.params.id}</strong>
      </span>
    </StoreProvider>
  )
}
