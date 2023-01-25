import { font, rem } from "shared/utils/style-utils"
import styled from "styled-components"

export type ButtonVariants = "primary" | "secondary" | "tertiary"

export const Wrapper = styled.button`
  ${font("Lato", 13, 500, 28)}
  padding: ${rem(6)} ${rem(14)};
  border: none;
  border-radius: ${rem(8)};
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`
