import { PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeEvery } from "redux-saga/effects"
import { getVat } from "../api"
import { taxPayerActions, TaxPayerType } from "../slice"

function* workerTaxPayer({ payload }: PayloadAction<string>) {
  try {
    const response: TaxPayerType = yield call(getVat, payload)

    yield put(taxPayerActions.fetchTaxPayerSuccess(response))
  } catch (e) {
    yield put(taxPayerActions.fetchTaxPayerFailure)
  }
}

export default function* watchFetchTaxPayer() {
  yield takeEvery(taxPayerActions.fetchTaxPayer.type, workerTaxPayer)
}
