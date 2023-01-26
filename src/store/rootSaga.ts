import watchFetchTaxPayer from "Home/redux/sideEffects/saga"
import { all, fork } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([fork(watchFetchTaxPayer)])
}
