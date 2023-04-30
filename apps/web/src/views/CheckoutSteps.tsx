/* eslint-disable prettier/prettier */
"use client"

import { format } from "@woovi/helpers"
import { useStore } from "@woovi/stores/react/use-store"
import { Display, Icon, Steps } from "@woovi/ui"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const CheckoutSteps = () => {
  const { state } = useStore("payment")
  const path = usePathname()

  const listObj = useMemo(
    () =>
      state.steps.list.map(i => ({
        ...i,
        id: String(i.id),
        checked: i.id === 1 && path.includes("credit"),
        idle: path.includes("pix") && i.label.toLowerCase().includes("pix") || path.includes("credit")
      })),
    [state.steps, path]
  )

  return (
    <section className="w-full flex flex-col gap-4">
      <Display
        when={
          state.installments.options.length >= 1 &&
          state.installments.selected.value !== state.total
        }
      >
        <Steps lined className="flex flex-col gap-4 w-full" data={listObj}>
          {props => (
            <div className="ml-2 w-full flex items-center justify-between text-lg">
              <p>{props.label}</p>
              <p>
                <strong>
                  {format.currency(
                    "pt-BR",
                    props.id === "2"
                      ? state.total - state.installments.selected.value
                      : state.installments.selected.value
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
          Total: {format.currency("pt-BR", state.installments.selected.total)}
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
