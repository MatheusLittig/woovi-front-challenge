import { HTMLAttributes, ReactNode } from "react"
import Checkbox from "../common/Checkbox"
import Display from "../modules/Display"

type StepsProps<
  T extends Partial<{ id: string; checked: boolean; idle: boolean }>
> = {
  data: T[]
  children: (props: T) => ReactNode
  lined: boolean
} & Omit<HTMLAttributes<HTMLUListElement>, "children">

function Steps<
  T extends Partial<{ id: string; checked: boolean; idle: boolean }>
>({ data, lined = false, ...props }: StepsProps<T>) {
  return (
    <ul {...props}>
      {data.map((i, index) => (
        <li key={index} className="flex items-center">
          <span className="relative flex flex-col items-center justify-center w-4 h-4">
            <Checkbox size="sm" checked={i.checked} idle={i.idle} />
            <Display when={lined && data.length - 1 !== index}>
              <div
                style={{ height: "28px", width: "2px", bottom: -28 }}
                className="absolute bg-dark-company-200"
              />
            </Display>
          </span>
          {props.children(i)}
        </li>
      ))}
    </ul>
  )
}

export default Steps
