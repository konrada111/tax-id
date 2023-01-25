import React from "react"
import { FieldValues, RegisterOptions, useController } from "react-hook-form"
import { ErrorMessage, Input, Wrapper } from "./TextField.style"

export interface TextFieldProps {
  name: string
  className?: string
  value?: string
  placeholder: string
  control: any
  type?: "text" | "number" | "password"
  disabled?: boolean
  rules?: Pick<
    RegisterOptions<FieldValues>,
    | "maxLength"
    | "minLength"
    | "validate"
    | "required"
    | "pattern"
    | "min"
    | "max"
  >
}

const TextField = ({
  className,
  value = "",
  name,
  placeholder,
  disabled = false,
  type,
  control,
  rules,
}: TextFieldProps) => {
  const { field, fieldState } = useController({
    control,
    defaultValue: value,
    name,
    rules,
  })

  return (
    <>
      <Wrapper
        error={!!fieldState.error}
        disabled={disabled}
        className={className}
      >
        <Input
          type={type}
          disabled={disabled}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder={placeholder}
        />
      </Wrapper>
      <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
    </>
  )
}

export default TextField
