import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Button from "shared/components/Button"
import TextField from "shared/components/TextField"
import { NIP_REGEX } from "shared/constants/regex"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "app/store"
import { taxPayerActions } from "./redux/slice"

export interface IFormInput {
  vat_number: string
}

const Home = () => {
  const { control, handleSubmit } = useForm<IFormInput>()

  const dispatch = useDispatch()
  const taxPayer = useSelector((state: AppState) => state.taxpayer)

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(taxPayerActions.fetchTaxPayer(data.vat_number))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="vat_number"
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
      <h1>{taxPayer.data?.company_name}</h1>
      <Button type="submit" label="Szukaj" />
    </form>
  )
}

export default Home
