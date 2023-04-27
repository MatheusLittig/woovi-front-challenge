// import { useDispatch, useSelector } from "react-redux"
// import { RootState, actions } from "../stores"

// const useService = <T extends keyof typeof actions, G extends string>(
//   store_name: T,
//   args: (props: {
//     state: RootState[T]
//     dispatch: <F extends keyof (typeof actions)[T]>(
//       action: F,
//       payload: Parameters<(typeof actions)[T][F]>[0]
//     ) => void
//   }) => Record<G, any>
// ) => {
//   const state = useSelector((store: RootState) => store[store_name])
//   const dispatch = useDispatch()

//   const data = {
//     state,
//     dispatch: <F extends keyof (typeof actions)[T]>(
//       action: F,
//       payload: Parameters<(typeof actions)[T][F]>[0]
//     ) => dispatch(actions[action](payload)),
//   } as const

//   return { state, ...args({ ...data }) } as {
//     state: typeof state
//   } & Record<G, any>
// }

// export { useService }
