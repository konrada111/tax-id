import React from "react"
import { IconWrapper, Label, Value, Wrapper } from "./Row.style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import theme from "shared/constants/theme"

export interface RowProps {
  label: string
  value: string
  icon: IconProp
}

const Row = ({ label, value, icon }: RowProps) => {
  return (
    <Wrapper>
      <IconWrapper>
        <FontAwesomeIcon
          style={{ width: "40px" }}
          color={theme.colors.primary}
          icon={icon}
        />
        <Label>{label}</Label>
      </IconWrapper>
      <Value>{value}</Value>
    </Wrapper>
  )
}

export default Row
