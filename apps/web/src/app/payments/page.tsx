"use client"

import { StoreProvider, useStore } from "@woovi/resources"

const TestComponent = () => {
  const { state, test } = useStore("payment", store => ({
    test: (value: number) =>
      store.dispatch("setPayments", [
        {
          id: "dada",
          options: [{ amount: 1, total: 100, value }],
          user_id: "dadda",
        },
      ]),
  }))

  return (
    <button onClick={() => test(89900)}>
      test {JSON.stringify(state.payments)}
    </button>
  )
}

export default function PaymentsPage() {
  return (
    <main>
      <StoreProvider>
        <TestComponent />
      </StoreProvider>
    </main>
  )
}
