"use client"

import useStore from "@woovi/stores/src/adapters/react/use-store"

export default function CheckoutPage() {
  const { state } = useStore("payment")

  console.log(state)

  return (
    <main>
      <h1>{JSON.stringify(state)}</h1>
    </main>
  )
}
