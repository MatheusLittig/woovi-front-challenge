import { HeaderText, TermDate } from "@/components"
import { CheckoutSteps } from "@/views"
import { StoreProvider } from "@woovi/stores/react/provider"
import { Icon } from "@woovi/ui"
import Link from "next/link"

export default function PixLayout(props: {
  children: React.ReactNode
  params: { id: string }
}) {
  return (
    <StoreProvider>
      <span className="flex items-start w-full">
        <Link href="/" className="flex items-center gap-2">
          <Icon.NavArrowLeft />
          {"Opções de pagamento"}
        </Link>
      </span>
      <HeaderText />
      {props.children}
      <TermDate />
      <CheckoutSteps />
      <span className="text-center text-dark-company-200">
        Identificador <br />
        <strong className="text-dark-company-400">{props.params.id}</strong>
      </span>
    </StoreProvider>
  )
}
