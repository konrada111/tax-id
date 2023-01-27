import { font, rem } from "shared/utils/style-utils"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${rem(40)};
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${rem(10)};
  align-items: center;
`

export const Label = styled.div`
  ${font("Lato", 14, 600, 20)}
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Value = styled.div`
  ${font("Lato", 12, 400, 14)};
  color: grey;
  align-self: flex-end;
`
