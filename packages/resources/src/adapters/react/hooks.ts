import { RootState, Dispatch, actions } from "../../stores"

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"

const storeDispatch: () => Dispatch = useDispatch
const storeSelector: TypedUseSelectorHook<RootState> = useSelector

const useStore = <T extends keyof RootState, G extends Record<string, any>>(
  store: T,
  args: (props: {
    state: RootState[T]
    dispatch: <F extends keyof (typeof actions)[T]>(
      action: F,
      payload: Parameters<(typeof actions)[T][F]>[0]
    ) => typeof storeDispatch
  }) => G
) => {
  const state = storeSelector(state => state[store])
  const _dispatch = storeDispatch()

  const dispatch = <F extends keyof (typeof actions)[T]>(
    action: F,
    payload: Parameters<(typeof actions)[T][F]>[0]
  ) => {
    return _dispatch(actions[store][action](payload as never))
  }

  return { state, ...args({ state, dispatch }) } as {
    state: typeof state
  } & G
}

export { useStore }
