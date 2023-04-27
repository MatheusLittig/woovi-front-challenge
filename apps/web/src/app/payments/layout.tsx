import { ReactNode } from "react"
import { StoreProvider } from "@woovi/resources"

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="bg-red-200">{children}</div>
}
