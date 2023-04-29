"use client"

import { useStore } from "@woovi/stores/react/use-store"
import { Display, Icon, Steps } from "@woovi/ui"
import { useMemo } from "react"

const CheckoutSteps = () => {
  const { state } = useStore("payment")

  const listObj = useMemo(
    () =>
      state.steps.list.map(i => ({
        ...i,
        id: String(i.id),
        checked: state.steps.current === i.id,
      })),
    [state.steps]
  )

  return (
    <section className="w-full flex flex-col gap-4">
      <Display
        when={
          state.installments.length >= 1 &&
          state.installments[0].value !== state.total
        }
      >
        <Steps lined className="flex flex-col gap-4 w-full" data={listObj}>
          {props => (
            <div className="ml-2 w-full flex items-center justify-between text-lg">
              <p>{props.label}</p>
              <p>
                <strong>
                  {Intl.NumberFormat("pt-BT", {
                    currency: "BRL",
                    style: "currency",
                  }).format(
                    props.id === "2"
                      ? state.total - state.installments[0].value
                      : state.installments[0].value
                  )}
                </strong>
              </p>
            </div>
          )}
        </Steps>
      </Display>

      <span
        style={{ width: "100%", height: "1px" }}
        className="bg-dark-company-200"
      />

      <span className="w-full flex items-center justify-between text-sm">
        CET {state.cet}%
        <p className="text-lg">
          Total:{" "}
          {Intl.NumberFormat("pt-BT", {
            currency: "BRL",
            style: "currency",
          }).format(state.total)}
        </p>
      </span>

      <span
        style={{ width: "100%", height: "1px" }}
        className="bg-dark-company-200"
      />

      <div className="w-full flex items-center justify-between">
        <p className="text-base font-semibold">Como funciona</p>
        <Icon.NavArrowDown />
      </div>

      <span
        style={{ width: "100%", height: "1px" }}
        className="bg-dark-company-200"
      />
    </section>
  )
}

export default CheckoutSteps
