import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import TextField from "shared/components/TextField"
import { NIP_REGEX } from "shared/constants/regex/nip"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "app/store"
import { taxPayerActions, TaxPayerType } from "./redux/slice"
import man from "shared/assets/images/man.png"
import girl from "shared/assets/images/girl.png"
import {
  Box,
  Form,
  Wrapper,
  Button,
  Info,
  RecentSearchWrapper,
  LeftSide,
  RightSide,
  FormWrapper,
  ReacentWrapper,
  Image,
} from "./Home.style"
import Row from "shared/components/Row"
import {
  faBuildingColumns,
  faCity,
  faAddressCard,
  faFile,
} from "@fortawesome/free-solid-svg-icons"
import { ErrorMessage } from "shared/components/TextField/TextField.style"
import { useLocalStorage } from "shared/hooks/useLocalStorage"
import ReacentSearch from "shared/components/RecentSearch/RecentSearch"

export type FormInputType = {
  vat_number: string
}

const Home = () => {
  const { control, handleSubmit } = useForm<FormInputType>()

  const dispatch = useDispatch()
  const taxPayer = useSelector((state: AppState) => state.taxpayer)

  const localData = useLocalStorage<TaxPayerType[]>("taxPayers", [])

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    dispatch(taxPayerActions.fetchTaxPayer(data.vat_number))
  }

  return (
    <Wrapper>
      <LeftSide>
        <Image src={girl} alt="girl" />
      </LeftSide>
      <FormWrapper>
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
      </FormWrapper>

      <RightSide>
        <Image src={man} alt="man" />
      </RightSide>
      <ReacentWrapper>
        <h2>Recent Search</h2>
        <RecentSearchWrapper>
          {localData.map(({ query, company_name }, idx) => (
            <ReacentSearch
              key={idx}
              companyName={company_name}
              vatNumber={query}
            />
          ))}
        </RecentSearchWrapper>
      </ReacentWrapper>

      {taxPayer.data?.valid && (
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
      {taxPayer.data?.valid === false && (
        <Info>
          Your vat number is invalid, cannot find it in our database (sample vat
          number LU26375245)
        </Info>
      )}
      {taxPayer.error && <ErrorMessage>{taxPayer.error}</ErrorMessage>}
    </Wrapper>
  )
}

export default Home
