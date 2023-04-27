import { ReactNode } from "react"
import { Nunito as FontSans } from "next/font/google"
import "./global.css"
import Image from "next/image"

const font = FontSans({
  preload: true,
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
        className={`${font.className} text-dark-company-600 px-3 py-2 m-[0_auto] h-screen flex flex-col items-center justify-between gap-8`}
      >
        <Image src="/logo.svg" alt="Woovi Pix" width={124} height={36} />
        {children}
      </body>
    </html>
  )
}
