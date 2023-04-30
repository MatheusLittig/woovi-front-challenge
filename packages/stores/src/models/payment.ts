import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Payment } from ".."

const initialState = {
  selected: null as null | number,
  steps: { current: 1, list: [{ id: 1, label: "Entrada no PIX" }] },
  installments: {
    selected: {} as Payment.Model["options"][0],
    options: [] as Payment.Model["options"],
  },
  term: "",
  cet: 0.05,
  total: 0,
}

const model = createSlice({
  name: "payments",

  initialState,

  reducers: {
    set: (state, action: PayloadAction<typeof initialState>) => {
      state = { ...state, ...action.payload }
    },

    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },

    reset: state => {
      state = { ...initialState }
      return state
    },

    setInstaments: (
      state,
      action: PayloadAction<Partial<(typeof initialState)["installments"]>>
    ) => {
      state.installments = { ...state.installments, ...action.payload }
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
      state.total = action.payload
    },
  },
})

export default model
