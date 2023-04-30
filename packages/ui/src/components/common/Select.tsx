import { VariantProps, cva } from "class-variance-authority"

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

type SelectProps<T = { id: number; label: string }> = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  data: Array<T>
  onSelectOpt?: (id: number) => void
} & VariantProps<typeof className>

function Select<T extends { id: number; label: string }>({
  data,
  size,
  variant,
  full,
  onSelectOpt,
  ...props
}: SelectProps<T>) {
  return (
    <select
      onChange={e => onSelectOpt && onSelectOpt(Number(e.target.value))}
      className={className({ variant, size, full })}
      {...props}
    >
      {data.map((i, index) => (
        <option key={index} value={i.id}>
          {i.label}
        </option>
      ))}
    </select>
  )
}

export default Select
