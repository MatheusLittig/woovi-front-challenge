import { CreditCardForm } from "@/views"

export default function CheckoutPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full relative gap-4">
      {/* <h1 className="font-bold text-2xl text-center">
        João, pague a entrada de{" "}
        {Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          style: "currency",
        }).format(state.total)}{" "}
        pelo Pix
      </h1> */}

      <CreditCardForm />
    </main>
  )
}
