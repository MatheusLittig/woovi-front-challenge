import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Payment } from ".."

const initialState = {
  payments: [] as Payment.Model[],
  selected: null as null | number,
  steps: { current: 1, list: [{ id: 1, label: "Entrada no PIX" }] },
  installment: [] as Payment.Model["options"],
  cet: 0.5,
  total: 0,
}

const model = createSlice({
  name: "payments",

  initialState,

  reducers: {
    setInstaments: (
      state,
      action: PayloadAction<(typeof initialState)["installment"]>
    ) => {
      state.installment = action.payload
    },

    setSelected: (state, action: PayloadAction<number>) => {
      state.selected = action.payload
    },

    advanceStep: (state, action: PayloadAction<number>) => {
      state.steps = { ...state.steps, current: action.payload }
    },

    addStep: (state, action: PayloadAction<{ id: number; label: string }>) => {
      state.steps = {
        ...state.steps,
        list: [...state.steps.list, action.payload],
      }
    },

    removeStep: state => {
      state.steps = {
        current: 1,
        list: [
          {
            id: 1,
            label: "Entrada no PIX",
          },
        ],
      }
    },

    updateTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload * state.cet + state.total
    },

    setPayments: (state, action: PayloadAction<Payment.Model[]>) => {
      state.payments = action.payload
    },
  },
})

export default model
