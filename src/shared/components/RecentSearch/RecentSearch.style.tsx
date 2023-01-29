import { font, rem } from "shared/utils/style-utils"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  gap: ${rem(20)};
  backgorund-color: ${({ theme }) => theme.colors.white};
  border-radius: ${rem(8)};
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderLabel = styled.p`
  ${font("Lato", 12, 600, 20)}
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Label = styled.p`
  ${font("Lato", 12, 400, 20)}
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.secondary};
`
