import { Payment } from "@woovi/stores"
import { Badge, Checkbox, Display, Row } from "@woovi/ui"
import { ComponentProps } from "react"

const PaymentOptionRow = ({
  checked = false,
  position = undefined,
  ...props
}: Payment.Model["options"][0] & { checked: boolean } & Pick<
    ComponentProps<typeof Row>,
    "position" | "onClick"
  >) => {
  return (
    <Row
      position={position}
      selected={checked}
      onClick={props.onClick}
      className={"border-2 -mt-[1px] border-dark-company-100"}
    >
      <Display when={position === "first"}>
        <Row.Indicator className="bg-dark-company-100 px-4 py-1 text-lg font-semibold flex items-center rounded-full">
          Pix parcelado
        </Row.Indicator>
      </Display>
      <Row.Content>
        <section className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-2xl">
              <strong>{props.amount}x</strong>{" "}
              {Intl.NumberFormat("pt-BR", {
                currency: "BRL",
                style: "currency",
              }).format(props.value)}
            </h1>
            <h3 className="text-dark-company-400">
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                currency: "BRL",
                style: "currency",
              }).format(props.total)}
            </h3>
          </div>

          <Checkbox checked={checked} />
        </section>

        <Display when={!!props.promo}>
          <Badge>{props.promo}</Badge>
        </Display>
      </Row.Content>
    </Row>
  )
}

export default PaymentOptionRow
