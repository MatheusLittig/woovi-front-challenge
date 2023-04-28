"use client"

import useStore from "@woovi/stores/src/adapters/react/use-store"
import { Badge, Button, Checkbox, List, Row } from "@woovi/ui"
import PaymentOptionRow from "../components/PaymentOptionRow"
import { Fragment } from "react"
import Link from "next/link"
import { Payment } from "@res/index"

const PaymentList = (props: { data: Payment.Model }) => {
  const { state, ...actions } = useStore("payment", store => ({
    setInstallments: (payload: Payment.Model["options"]) =>
      store.dispatch("setInstaments", payload),
    selectOption: (amount: number) => {
      if (store.state.selected === amount) {
        store.dispatch("setSelected", null)
        store.dispatch("removeStep", undefined)
        store.dispatch("setInstaments", [])
        return
      }

      if (amount === 1) {
        store.dispatch("removeStep", null)
      }

      if (amount >= 2) {
        store.dispatch("addStep", { id: 2, label: "2ª no cartão" })
        store.dispatch("advanceStep", 2)
      }

      store.dispatch("setSelected", amount)

      return
    },
  }))

  const payment = props.data

  return (
    <Fragment>
      <Row
        selected={state.selected === 1}
        onClick={() => actions.selectOption(1)}
        className="border-2 border-dark-company-100 rounded-lg"
      >
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

            <Checkbox checked={state.selected === 1} />
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
            const base = {
              ...props,
              checked: state.selected === props.amount,
              onClick: () => {
                actions.selectOption(props.amount)
                actions.setInstallments([{ ...props }])
              },
            }

            if ([0, payment.options.length - 1].includes(index)) {
              const position = index === 0 ? "first" : "last"
              return { ...base, position }
            } else {
              return { ...base }
            }
          }}
        />
      </ul>
    </Fragment>
  )
}

export const AdvanceButton = (props: { id: string }) => {
  const {
    state: { selected, steps },
  } = useStore("payment")

  console.log(typeof selected)

  return (
    <Link
      href={`/checkout/${props.id}/${steps.current === 2 ? "credit" : "pix"}`}
    >
      <Button
        disabled={typeof selected !== "number"}
        size="lg"
        variant="primary"
      >
        Próxima etapa
      </Button>
    </Link>
  )
}

export default PaymentList
