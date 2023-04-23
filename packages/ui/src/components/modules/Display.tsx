/* eslint-disable indent */
import { Fragment, ReactNode } from "react"

type DisplayProps = {
  when: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fallback?: any
  children: ReactNode
}

const Display = (props: DisplayProps) => (
  <Fragment>
    {props.when
      ? props.children
      : !props.when && !!props.fallback
      ? props.fallback
      : null}
  </Fragment>
)

export default Display
