import { Badge, Button, Checkbox, Icon, Input, Row } from "@woovi/ui"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex flex-col w-full gap-4">
      <Button full>
        <p>{"Pagar agora"}</p>
        <Icon.CreditCard />
      </Button>

      <Input type="text" placeholder="E-mail" />

      <Badge>
        🤑 <strong>R$ 300,00</strong> de volta no seu Pix na hora
      </Badge>

      <Row className="border-2 border-dark-company-200">
        <Row.Indicator className="bg-dark-company-100 px-4 py-1 text-lg font-semibold flex items-center rounded-full">
          Pix parcelado
        </Row.Indicator>
        <Row.Content>
          <section className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-2xl">
                <strong>2x</strong> R$ 15.300,00
              </h1>
              <h3 className="text-dark-company-400">Total: R$ 30.620,00</h3>
            </div>

            <Checkbox />
          </section>

          <Badge>
            <strong>-3% de juros:</strong> Melhor opção{" "}
          </Badge>
        </Row.Content>
      </Row>

      <Link href="/payments">go to payments</Link>
    </main>
  )
}
