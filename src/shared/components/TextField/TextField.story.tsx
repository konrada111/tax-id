import React from "react"
import { ComponentStory } from "@storybook/react"
import TextField from "./TextField"
import { useForm } from "react-hook-form"
import { NIP_REGEX } from "shared/constants/regex"

export default {
  title: "Forms/TextField",
  component: TextField,
}

const Template: ComponentStory<typeof TextField> = () => {
  const { control } = useForm({ mode: "onBlur" })

  return (
    <div style={{ width: "300px" }}>
      <TextField
        control={control}
        placeholder="NIP"
        name="test"
        rules={{
          required: "Uzupełnij NIP",
          pattern: {
            value: new RegExp(NIP_REGEX),
            message: "Nieprawidłowy format",
          },
        }}
      />
    </div>
  )
}

export const Primary = Template.bind({})
