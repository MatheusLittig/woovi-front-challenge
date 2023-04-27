import { VariantProps, cva, cx } from "class-variance-authority"
import { ComponentProps } from "react"

const className = cva("min-w-fit w-full min-h-[96px] relative", {
  variants: {
    selected: {
      true: ["border-green-company-500"],
    },
    position: {
      first: ["rounded-t-lg"],
      last: ["rounded-b-lg"],
    },
  },
})

type RowContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof className>

const RowContainer = ({
  position,
  selected,
  className: _class,
  ...props
}: RowContainerProps) => (
  <div className={cx(className({ selected, position }), _class)} {...props} />
)

const RowIndicator = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cx(className, "h-6 absolute left-4 -top-3")} {...props} />
)

const RowContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <main
    className={cx(
      className,
      "w-full h-full pt-4 px-3 pb-3 flex flex-col items-start justify-center"
    )}
    {...props}
  />
)

type RowComponent = {
  (props: ComponentProps<typeof RowContainer>): JSX.Element
  Indicator: (props: ComponentProps<typeof RowIndicator>) => JSX.Element
  Content: (props: ComponentProps<typeof RowContent>) => JSX.Element
}

const Row = RowContainer as RowComponent
Row.Indicator = RowIndicator
Row.Content = RowContent

export default Row
