import { VariantProps, cva } from "class-variance-authority"

const className = cva(
  "flex text-gray-50 items-center gap-2 min-w-[40px] min-h-[2rem] w-auto px-2 rounded ",
  {
    variants: {
      variant: {
        common: ["bg-blue-company-950"],
      },
    },
    defaultVariants: {
      variant: "common",
    },
  }
)

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof className>

const Badge = ({ variant, ...props }: BadgeProps) => {
  return <span className={className({ variant })} {...props} />
}

export default Badge
