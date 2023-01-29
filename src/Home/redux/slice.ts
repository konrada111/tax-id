import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TaxPayerError = {
  error: {
    code: number
    type: string
    info: string
  }
}

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
  error: string | null
}

const initialState: ITaxPayerState = {
  data: undefined,
  error: null,
}

export const taxPayerSlice = createSlice({
  name: "taxPayer",
  initialState,
  reducers: {
    fetchTaxPayerSuccess: (state, { payload }: PayloadAction<TaxPayerType>) => {
      state.data = payload
      state.error = null
    },
    fetchTaxPayerFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
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
