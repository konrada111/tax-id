import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TaxPayerType = {
  valid: boolean
  database: string
  format_valid: boolean
  query: string
  country_code: string
  vat_number: string
  company_name: string
  company_address: string
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
    fetchTaxPayerSuccess: (state, { payload }: PayloadAction<TaxPayerType>) => {
      state.data = payload
    },
    fetchTaxPayerFailure: (state) => {
      state.isError = true
    },
  },
})

const taxPayerActions = {
  fetchTaxPayer: createAction<string>("taxPayer/fetchTaxPayer"),
  fetchTaxPayerSuccess: createAction<TaxPayerType>(
    "taxPayer/fetchTaxPayerSuccess"
  ),
  fetchTaxPayerFailure: createAction<string>("taxPayer/fetchTaxPayerFailure"),
}

export { taxPayerActions }
