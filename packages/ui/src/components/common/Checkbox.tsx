"use client"

import { VariantProps, cva, cx } from "class-variance-authority"
import { useState } from "react"
import Display from "../modules/Display"
import Icon from "./Icon"

const className = cva(
  "rounded-full border-2 cursor-pointer flex items-center justify-center",
  {
    variants: {
      size: {
        sm: ["w-4 h-6"],
        md: ["w-6 h-6"],
      },
      checked: {
        true: ["bg-green-company-500 border-green-company-500"],
        false: ["bg-transparent border-dark-company-100"],
      },
    },

    defaultVariants: {
      checked: false,
      size: "md",
    },
  }
)

type CheckboxProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> &
  VariantProps<typeof className>

const Checkbox = ({
  checked: _checked,
  size,
  onClick: _onClick,
  ...props
}: CheckboxProps) => {
  const [selected, setSelected] = useState(_checked ?? false)

  return (
    <span
      className={className({ checked: _checked ?? selected, size })}
      onClick={_onClick ? _onClick : () => setSelected(!selected)}
      {...props}
    >
      <Display when={_checked ?? selected}>
        <Icon.Check
          className={cx(
            size === "sm"
              ? "w-3 h-3 stroke-2 text-gray-50"
              : "w-4 h-4 stroke-2 text-gray-50"
          )}
        />
      </Display>
    </span>
  )
}

export default Checkbox
