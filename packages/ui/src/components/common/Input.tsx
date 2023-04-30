import { ChangeEvent, ComponentProps, HTMLInputTypeAttribute } from "react"
import Display from "../modules/Display"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"

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

    full: {
      true: ["w-full"],
    },
  },

  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string
  type?: HTMLInputTypeAttribute
} & VariantProps<typeof className>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, full, size, variant, ...props }, ref) => {
    return (
      <div className="flex group flex-col items-start justify-center gap-2">
        <Display when={!!label}>
          <label htmlFor={props.id} className="ml-2">
            {label}
          </label>
        </Display>
        <input
          ref={ref}
          className={className({ full, size, variant })}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
