"use client"
import { Button, Display, Icon, QRCode } from "@woovi/ui"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { useStore } from "@res/adapters/react/use-store"

const code = "pix-key-1234-abcdefg-red-green-light-test-a-bunch-of-random-words"

export default function CheckoutPage() {
  const [copied, setCopied] = useState(false)
  const { state, reset } = useStore("payment", store => ({
    reset: () => store.dispatch("reset"),
  }))

  return (
    <main className="flex flex-col items-center justify-center w-full relative gap-5">
      <div className="flex cursor-pointer items-center justify-center p-2 border-2 border-green-company-500 rounded-md">
        <Link
          href={
            state.selected !== 1
              ? usePathname().replace("/pix", "/credit")
              : "/"
          }
        >
          <QRCode
            onClick={() => state.selected === 1 && reset()}
            value={code}
            size={332}
          />
        </Link>
      </div>

      <Button
        onClick={() => {
          setCopied(true)

          navigator.clipboard.writeText(code)

          setTimeout(() => {
            setCopied(false)
          }, 2000)
        }}
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
    </main>
  )
}
