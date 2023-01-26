import { AxiosResponse } from "axios"
import { takeEvery, call, put } from "redux-saga/effects"
import { sagaActions } from "./actions"
import { getVat } from "./api"
import { fetchTaxFailure, fetchTaxPayer, TaxPayerType } from "./slice"

function* workerTaxPayer(vat_number: string) {
  try {
    const response: AxiosResponse<TaxPayerType> = yield call(() =>
      getVat(vat_number)
    )
    yield put(fetchTaxPayer(response))
  } catch (e) {
    yield put(fetchTaxFailure)
  }
}

function* watchFetchTaxPayer(
  vat_number: string
): Generator<unknown, void, TaxPayerType> {
  yield takeEvery(sagaActions.FETCH_TAX_PAYER, () => workerTaxPayer(vat_number))
}

export default watchFetchTaxPayer
