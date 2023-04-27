import { Payment } from "@woovi/resources"
import { Badge, Checkbox, Display, Row } from "@woovi/ui"
import { ComponentProps } from "react"

const PaymentOptionRow = ({
  checked = false,
  position = undefined,
  ...props
}: Payment["options"][0] & { checked: boolean } & Pick<
    ComponentProps<typeof Row>,
    "position"
  >) => {
  return (
    <Row
      position={position}
      className={`border-x-2 ${
        position === "last" ? "border-b-2 border-t-2" : "border-t-2"
      } border-dark-company-100`}
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
              <strong>{props.amount}x</strong>
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
