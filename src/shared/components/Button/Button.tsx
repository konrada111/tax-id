import React from "react"
import { Wrapper } from "./Button.style"

export type ButtonType = "button" | "submit" | "reset"

export interface ButtonProps {
  label: string
  onClick?(): void
  className?: string
  type?: ButtonType
  "data-testid"?: string
}

const Button = ({
  label,
  onClick,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      type={type}
      data-testid={props["data-testid"]}
    >
      {label}
    </Wrapper>
  )
}

export default Button
