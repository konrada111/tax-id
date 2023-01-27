import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Button from "shared/components/Button"
import TextField from "shared/components/TextField"
import { NIP_REGEX } from "shared/constants/regex"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "app/store"
import { taxPayerActions } from "./redux/slice"
import { Box, Form, Wrapper } from "./Home.style"
import Row from "shared/components/Row"
import {
  faBuildingColumns,
  faCity,
  faAddressCard,
  faFile,
} from "@fortawesome/free-solid-svg-icons"

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
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" label="Szukaj" />
      </Form>
      {taxPayer.data && (
        <Box>
          <Row
            icon={faBuildingColumns}
            label="Company name"
            value={taxPayer.data?.company_name}
          />
          <Row
            icon={faCity}
            label="Country code"
            value={taxPayer.data?.country_code}
          />
          <Row
            icon={faAddressCard}
            label="Company address"
            value={taxPayer.data?.company_address}
          />
          <Row
            icon={faFile}
            label="Vat number"
            value={taxPayer.data?.vat_number}
          />
        </Box>
      )}
    </Wrapper>
  )
}

export default Home
