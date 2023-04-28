/** schemas */
export type * as Payment from "./schemas/payment"

/** models */
import { default as payment } from "./models/payment"

/* -------------------------------------------- */
/* Store Config                                 */
/* -------------------------------------------- */

import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    payment: payment.reducer,
  },
})

export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

/* ------------ End of store config ----------- */

/** actions */
export const actions = {
  payment: payment.actions,
}

/** adapters */
