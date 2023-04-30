/* eslint-disable prettier/prettier */
"use client"

import { useStore } from "@res/adapters/react/use-store"
import { usePathname } from "next/navigation"
import { format } from "@woovi/helpers"

export const HeaderText = () => {
  const { state } = useStore("payment")

  const path = usePathname()

  const message = path.includes("/credit")
    ? `João, pague o restante em ${state.installments.selected.amount}x no cartão`
    : path.includes("/pix") && state.installments.selected.value === undefined
      ? `João, pague a entrada de ${format.currency("pt-BR", state.total)}
    pelo Pix`
      : `João, pague a entrada de ${format.currency(
        "pt-BR",
        state.installments.selected.value
      )}
      pelo Pix`

  return (
    <h1 className="font-bold text-2xl text-center">{message}</h1>
  )
}

export default HeaderText