import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Payment } from "../../schemas/payment"

const paymentsModel = createSlice({
  name: "payments",

  initialState: {
    payments: [] as Payment[],
    steps: { current: 1, list: [{ id: 1, label: "Entrada no PIX" }] },
    cet: 0.5,
    total: 0,
  },

  reducers: {
    advanceStep: (state, action: PayloadAction<number>) => {
      state.steps = { ...state.steps, current: action.payload }
    },

    updateTotal: state => {
      state.total = (state.cet % state.total) + state.total
    },

    setPayments: (state, action: PayloadAction<Payment[]>) => {
      state.payments = action.payload
    },
  },
})

export { paymentsModel }
