import { VariantProps, cva } from "class-variance-authority"

const className = cva(
  "flex items-center justify-center gap-2 transition-all rounded-lg",
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-company-950 text-white",
          "focus:outline-none focus:ring-2 focus:ring-blue-company-700",
        ],
      },
      size: {
        md: ["h-9 px-2 py-1"],
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

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof className>

const Button = ({ variant, size, full, ...props }: ButtonProps) => (
  <button className={className({ variant, size, full })} {...props} />
)

export default Button
