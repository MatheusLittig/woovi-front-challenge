import { Button, Icon } from "@woovi/ui"

export default function Page() {
  return (
    <main className="w-full">
      <Button full>
        <p>{"Pagar agora"}</p>
        <Icon.CreditCard />
      </Button>
    </main>
  )
}
