import { VariantProps, cva } from "class-variance-authority"

const className = cva(
  "flex text-gray-50 items-center gap-2 min-w-[40px] w-[calc(100%_-_23px)] rounded-l min-h-[2rem] px-2",
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
  return (
    <span className="relative flex items-center h-12 w-full">
      <div className={className({ variant })} {...props} />
      <div
        style={{
          position: "absolute",
          right: "0",
          width: "0",
          height: "0",
          borderBottom: "16px solid transparent",
          borderLeft: "16px solid #133a6f",
          borderRight: "16px solid #133a6f",
          transform: "rotate(-90deg)",
        }}
      />
    </span>
  )
}

export default Badge
