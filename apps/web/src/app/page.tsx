import { Button, Icon, Input } from "@woovi/ui"

export default function Page() {
  return (
    <main className="flex flex-col w-full gap-4">
      <Button full>
        <p>{"Pagar agora"}</p>
        <Icon.CreditCard />
      </Button>

      <Input type="text" placeholder="E-mail" />
    </main>
  )
}
