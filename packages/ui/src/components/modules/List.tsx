import { Fragment } from "react"

type ListProps<T, F extends (props: T) => JSX.Element> = {
  data: T[]
  sanitize?: (props: T & Parameters<F>[0], index: number) => any
  component: F
}

function List<T, F extends (props: T) => JSX.Element>(props: ListProps<T, F>) {
  let updated = []

  if (props.sanitize) {
    updated = props.data.map(props?.sanitize)
  } else {
    updated = props.data
  }

  return (
    <Fragment>
      {updated.map((item, index) => (
        <li key={index}>{props.component(item)}</li>
      ))}
    </Fragment>
  )
}

export default List
