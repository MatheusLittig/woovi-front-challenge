import { configureStore } from "@reduxjs/toolkit"
import { paymentsModel as payment } from "./payments/model"

export const store = configureStore({
  reducer: {
    payment: payment.reducer,
  },
})

export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

/** actions */
export const actions = {
  payment: payment.actions,
}

/** services */
// export { default as paymentService } from "./payments/service"

/** provider */
export { default as StoreProvider } from "./provider"
