import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import Button from "shared/components/Button"
import TextField from "shared/components/TextField"
import { NIP_REGEX } from "shared/constants/regex"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "store/store"
import { taxPayerActions } from "./redux/slice"

const Home = () => {
  const { control } = useForm()

  const dispatch = useDispatch()
  const taxPayer = useSelector((state: AppState) => state.taxpayer)

  useEffect(() => {
    dispatch(taxPayerActions.fetchTaxPayer("LU26375245"))
  }, [])

  useEffect(() => {
    console.log("taxPayer: ", taxPayer)
  }, [taxPayer])

  return (
    <div>
      <TextField
        name="nip"
        placeholder="NIP"
        control={control}
        rules={{
          required: "Uzupełnij NIP ",
          pattern: {
            value: NIP_REGEX,
            message: "Nieprawidłowy format",
          },
        }}
      />
      <Button label="Szukaj" />
    </div>
  )
}

export default Home
