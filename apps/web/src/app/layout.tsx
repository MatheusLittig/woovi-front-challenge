import { ReactNode } from "react"
import { Nunito as FontSans } from "next/font/google"
import "./global.css"
import Image from "next/image"
import { Icon } from "@woovi/ui"

const font = FontSans({
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Woovi Pix",
    template: "%s | Woovi Pix",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} text-dark-company-600 px-3 py-2 m-[0_auto] h-screen flex flex-col items-center gap-8 lg:max-w-md`}
      >
        <Image src="/logo.svg" alt="Woovi Pix" width={124} height={36} />
        {children}
        <p className="flex items-center gap-1 text-dark-company-200 text-sm">
          <Icon.ShieldCheck />
          Pagamento 100% seguro via
          <Image
            className="grayscale"
            src="/logo.svg"
            alt="Woovi Pix"
            width={48}
            height={22}
          />
        </p>
      </body>
    </html>
  )
}
