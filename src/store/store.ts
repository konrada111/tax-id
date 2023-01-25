import { configureStore } from "@reduxjs/toolkit"
import { taxPayerSlice } from "Home/redux/slice"

export const store = configureStore({
  reducer: { taxpayer: taxPayerSlice.reducer },
})

export type AppDispatch = typeof store.dispatch

export type AppState = ReturnType<typeof store.getState>

export default store
