import { VariantProps, cva } from "class-variance-authority"

const className = cva(
  "flex items-center justify-center gap-2 font-semibold transition-all rounded-lg disabled:bg-dark-company-300",
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-company-950 text-white",
          "focus:outline-none focus:ring-2 focus:ring-blue-company-700",
        ],
        success: [
          "bg-green-company-500 text-white",
          "focus:outline-none focus:ring-2 focus:ring-green-company-300",
        ],
      },
      size: {
        md: ["h-9 px-3 py-1"],
        lg: ["h-12 px-4 py-1"],
      },
      full: {
        true: ["w-full"],
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof className> & { disabled?: boolean }

const Button = ({ variant, size, full, ...props }: ButtonProps) => (
  <button className={className({ variant, size, full })} {...props} />
)

export default Button
