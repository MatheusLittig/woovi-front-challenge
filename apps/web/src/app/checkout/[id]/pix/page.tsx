"use client"

import { useStore } from "@woovi/stores/react/use-store"
import { Button, Display, Icon, QRCode } from "@woovi/ui"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

const code = "pix-key-1234-abcdefg-red-green-light-test-a-bunch-of-random-words"

export default function CheckoutPage() {
  const { state } = useStore("payment")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }, [copied])

  return (
    <main className="flex flex-col items-center justify-center w-full relative gap-5">
      <h1 className="font-bold text-2xl text-center">
        João, pague a entrada de{" "}
        {Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          style: "currency",
        }).format(state.installments[0].value ?? state.total)}{" "}
        pelo Pix
      </h1>
      <div className="flex cursor-pointer items-center justify-center p-2 border-2 border-green-company-500 rounded-md">
        <Link href={usePathname().replace("/pix", "/credit")}>
          <QRCode value={code} size={332} />
        </Link>
      </div>

      <Button
        onClick={() => (setCopied(true), navigator.clipboard.writeText(code))}
        disabled={copied}
      >
        <Display
          when={copied}
          fallback={
            <>
              Clique para copiar QR CODE <Icon.Copy />
            </>
          }
        >
          Copiado para o clipboard <Icon.Check />
        </Display>
      </Button>

      <span className="text-center text-dark-company-200">
        Prazo de pagamento <br />
        <strong className="text-dark-company-400">
          {new Date().toLocaleDateString()} -{" "}
          {new Date().getHours() + ":" + new Date().getMinutes()}
        </strong>
      </span>
    </main>
  )
}
