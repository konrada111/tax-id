import React from "react"
import { useForm } from "react-hook-form"
import Button from "shared/components/Button"
import TextField from "shared/components/TextField"
import { NIP_REGEX } from "shared/constants/regex"

const Home = () => {
  const { control } = useForm()

  return (
    <div>
      <TextField
        name="nip"
        placeholder="NIP"
        control={control}
        rules={{
          required: "Uzupełnij NIP",
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
