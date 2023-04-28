import { actions, store } from "@woovi/stores"
import PaymentList, { AdvanceButton } from "../views/PaymentList"
import StoreProvider from "@woovi/stores/src/adapters/react/provider"

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/payment")
  const payment = await req.json()

  store.dispatch(actions.payment.updateTotal(payment.total))
  store.dispatch(actions.payment.setPayments([payment]))

  return (
    <main className="flex flex-col items-center justify-center w-full relative">
      <h1 className="font-bold text-2xl text-center">
        João, como você gostaria de pagar?
      </h1>

      <StoreProvider>
        <section className="flex flex-col w-full h-full mt-8 mb-20 gap-8">
          <PaymentList data={[payment]} />
        </section>
        <section className="flex flex-col items-center justify-center border-t-2 border-dark-company-100 fixed bottom-0 h-24 w-full bg-white">
          <AdvanceButton id={store.getState().payment.payments[0].id} />
        </section>
      </StoreProvider>
    </main>
  )
}
