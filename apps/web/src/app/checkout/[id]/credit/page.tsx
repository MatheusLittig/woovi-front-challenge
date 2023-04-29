"use client"

import { useStore } from "@woovi/stores/react/use-store"
import { Button, Icon } from "@woovi/ui"

export default function CheckoutPage() {
  const { state } = useStore("payment")

  return (
    <main className="flex flex-col items-center justify-center w-full relative gap-4">
      <h1 className="font-bold text-2xl text-center">
        João, pague a entrada de{" "}
        {Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          style: "currency",
        }).format(state.total)}{" "}
        pelo Pix
      </h1>
      <Button>
        Clique para copiar QR CODE <Icon.Copy />
      </Button>

      <span className="text-center text-dark-company-200">
        Prazo de pagamento
        <br />
        <strong className="text-dark-company-400">
          {new Date().toLocaleDateString()}
        </strong>
      </span>
    </main>
  )
}
