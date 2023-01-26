import { configureStore } from "@reduxjs/toolkit"
import { taxPayerSlice } from "Home/redux/slice"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { taxpayer: taxPayerSlice.reducer },
  middleware: [sagaMiddleware],
})

export type AppDispatch = typeof store.dispatch

export type AppState = ReturnType<typeof store.getState>

export default store
