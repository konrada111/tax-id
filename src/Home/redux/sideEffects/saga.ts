import { PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeEvery } from "redux-saga/effects"
import { handleStoreTaxPayers } from "shared/utils/localstorage"
import { getVat } from "../api"
import { taxPayerActions, TaxPayerError, TaxPayerType } from "../slice"

type ResponseTaxPayerType = TaxPayerType & TaxPayerError

function* workerTaxPayer({ payload }: PayloadAction<string>) {
  try {
    const response: ResponseTaxPayerType = yield call(getVat, payload)

    if (response.error) {
      yield put(taxPayerActions.fetchTaxPayerFailure(response.error?.info))
    } else {
      yield put(taxPayerActions.fetchTaxPayerSuccess(response))
      if (response.valid) {
        yield handleStoreTaxPayers(response)
      }
    }
  } catch (e) {
    yield put(taxPayerActions.fetchTaxPayerFailure)
  }
}

export default function* watchFetchTaxPayer() {
  yield takeEvery(taxPayerActions.fetchTaxPayer.type, workerTaxPayer)
}
