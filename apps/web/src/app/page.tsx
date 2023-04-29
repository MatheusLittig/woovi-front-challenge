import PaymentList, { AdvanceButton } from "../views/PaymentList"
import { StoreProvider } from "@woovi/stores/react/provider"
import payment from "../../db.json"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full relative">
      <h1 className="font-bold text-2xl text-center">
        João, como você gostaria de pagar?
      </h1>

      <StoreProvider>
        <section className="flex flex-col w-full h-full mt-8 mb-20 gap-8">
          <PaymentList data={payment} />
        </section>
        <section className="flex flex-col items-center justify-center border-t-2 border-dark-company-100 fixed z-10 bottom-0 h-24 w-full bg-white">
          <AdvanceButton id={payment.id} />
        </section>
      </StoreProvider>
    </main>
  )
}
