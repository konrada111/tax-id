import { AnyAction, createSlice } from "@reduxjs/toolkit"

export type TaxPayerType = {
  valid: boolean
  database: string
  format_valid: boolean
  query: string
  country_code: string
  vat_number: string
  company_name: string
  company_adress: string
}

interface ITaxPayerState {
  data?: TaxPayerType
  isError: boolean
}

const initialState: ITaxPayerState = {
  data: undefined,
  isError: false,
}

export const taxPayerSlice = createSlice({
  name: "taxPayer",
  initialState,
  reducers: {
    fetchTaxPayer: (state, action) => {
      state.data = action.payload
    },
    fetchTaxFailure: (state) => {
      state.isError = true
    },
  },
})

export const { fetchTaxPayer, fetchTaxFailure } = taxPayerSlice.actions
