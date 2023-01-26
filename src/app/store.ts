import { configureStore } from "@reduxjs/toolkit"
import { taxPayerSlice } from "Home/redux/slice"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { taxpayer: taxPayerSlice.reducer },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>

export default store
