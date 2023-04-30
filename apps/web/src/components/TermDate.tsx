"use client"
import { useStore } from "@res/adapters/react/use-store"

const TermDate = () => {
  const { state } = useStore("payment")

  const date = new Date(state.term)

  return (
    <span className="text-center text-dark-company-200">
      Prazo de pagamento <br />
      <strong className="text-dark-company-400">
        {date.toLocaleDateString()} -{" "}
        {date.getHours() + ":" + date.getMinutes()}
      </strong>
    </span>
  )
}

export default TermDate
