import { sizing, font, rem } from "shared/utils/style-utils"
import styled from "styled-components"

export const Wrapper = styled.div<{
  error?: boolean
  disabled?: boolean
}>`
  display: flex;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${rem(8)};
  padding: ${rem(14)} ${rem(6)};
`

export const Input = styled.input`
  ${sizing("100%")};
  ${font("Lato", 14, 400, 26)};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  padding: 0 ${rem(16)};
  background: transparent;
  height: 90%;
  margin-top: ${rem(3)}
  border-radius: ${rem(6)};
`
export const ErrorMessage = styled.p`
  ${font("Lato", 10, 400, 26)};
  color: red;
`
