import { HTMLInputTypeAttribute } from "react"
import Display from "../modules/Display"
import { cva } from "class-variance-authority"

const className = cva("transition-all rounded-lg", {
  variants: {
    variant: {
      outline: [
        "border-2 border-dark-company-100",
        "focus:outline-none focus:ring-2 focus:ring-blue-company-700",
      ],
    },
    size: {
      md: ["h-16 px-2 py-1", "text-lg"],
    },
  },

  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: HTMLInputTypeAttribute
}

const Input = ({ label, ...props }: InputProps) => (
  <div className="flex group flex-col items-start justify-center gap-2">
    <Display when={!!label}>
      <label htmlFor={props.id} className="ml-2">
        {label}
      </label>
    </Display>
    <input className={className()} {...props} />
  </div>
)

export default Input
