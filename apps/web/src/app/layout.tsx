import { ReactNode } from "react"
import "./global.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="px-3 py-2 m-[0_auto]">{children}</body>
    </html>
  )
}
