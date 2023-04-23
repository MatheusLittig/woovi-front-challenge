import { ReactNode } from "react"
import { Nunito as FontSans } from "next/font/google"
import "./global.css"

const font = FontSans({
  preload: true,
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} px-3 py-2 m-[0_auto]`}>
        {children}
      </body>
    </html>
  )
}
