/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { RootState, Dispatch, actions } from "../.."

import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"

const storeDispatch: () => Dispatch = useDispatch
const storeSelector: TypedUseSelectorHook<RootState> = useSelector

/**
 *
 * @param store the name of the store model that you would like to get state and dispatch
 * @param args extra modules that contains dispatch and state access
 * @returns
 */
const useStore = <T extends keyof RootState, G extends Record<string, any>>(
  store: T,
  args?: (props: {
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

  if (args) {
    return { state, ...args({ state, dispatch }) } as {
      state: typeof state
    } & G
  } else {
    return { state, args: {} } as {
      state: typeof state
    } & G
  }
}

export default useStore
