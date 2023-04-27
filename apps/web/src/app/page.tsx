import { Payment } from "@woovi/resources"
import { Badge, Button, Checkbox, List, Row } from "@woovi/ui"
import PaymentOptionRow from "../components/PaymentOptionRow"
import Link from "next/link"

export default async function Page() {
  const payment = (await fetch("http://localhost:3000/api/payment").then(res =>
    res.json()
  )) as Payment

  return (
    <main className="flex flex-col items-center justify-center w-full relative">
      <h1 className="font-bold text-2xl text-center">
        João, como você gostaria de pagar?
      </h1>

      <section className="flex flex-col w-full h-full mt-8 mb-20 gap-8">
        <Row className="border-2 border-dark-company-100 rounded-lg">
          <Row.Indicator className="bg-dark-company-100 px-4 py-1 text-lg font-semibold flex items-center rounded-full">
            Pix
          </Row.Indicator>
          <Row.Content>
            <section className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-2xl">
                  <strong>1x </strong>
                  {Intl.NumberFormat("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  }).format(payment.total)}
                </h1>
                <h3 className="text-green-company-500">
                  Ganhe <strong>3% de Cashback</strong>
                </h3>
              </div>

              <Checkbox />
            </section>

            <Badge>
              🤑 <strong>R$ 300,00</strong> de volta no seu Pix
            </Badge>
          </Row.Content>
        </Row>

        <ul className="flex flex-col">
          <List
            component={PaymentOptionRow}
            data={payment.options}
            sanitize={(props, index) => {
              if ([0, payment.options.length - 1].includes(index))
                return { ...props, position: index === 0 ? "first" : "last" }
              else return { ...props }
            }}
          />
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center border-t-2 border-dark-company-100 fixed bottom-0 h-24 w-full bg-white">
        <Link href={`/checkout/${payment.id}`}>
          <Button disabled size="lg" variant="primary">
            Próxima etapa
          </Button>
        </Link>
      </section>
    </main>
  )
}
