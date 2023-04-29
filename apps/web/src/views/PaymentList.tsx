"use client"

import { useStore } from "@woovi/stores/react/use-store"
import { Badge, Button, Checkbox, List, Row } from "@woovi/ui"
import { Fragment } from "react"
import { PaymentOptionRow } from "@/components"
import { Payment } from "@res/index"
import Link from "next/link"

const PaymentList = (props: { data: Payment.Model }) => {
  const { state, ...actions } = useStore("payment", store => ({
    setTotal: (payload: number) => store.dispatch("updateTotal", payload),

    selectOption: (id: number, data?: Payment.Model["options"][0]) => {
      /** unselect an item in the list */
      if (store.state.selected === id) {
        store.dispatch("setInstaments", [])
        store.dispatch("setSelected", null)
        store.dispatch("removeStep")
        return
      }

      if (id === 1) {
        store.dispatch("removeStep")
        store.dispatch("setInstaments", [
          { amount: 1, total: props.data.total, value: props.data.total },
        ])
        store.dispatch("updateTotal", props.data.total)
      }

      if (id >= 2) {
        store.dispatch("removeStep")
        store.dispatch("addStep", { id: 2, label: "2ª no cartão" })
        store.dispatch("setInstaments", [{ ...data }])
        store.dispatch("updateTotal", data.total)
      }

      store.dispatch("setSelected", id)

      return
    },
  }))

  const payment = props.data

  console.log(state)

  return (
    <Fragment>
      <Row
        selected={state.selected === 1}
        onClick={() => actions.selectOption(1)}
        className="border-2 border-dark-company-100 rounded-lg cursor-pointer"
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
                actions.selectOption(props.amount, props)
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
    state: { selected },
  } = useStore("payment")

  return (
    <Link href={`/checkout/${props.id}/pix`}>
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
