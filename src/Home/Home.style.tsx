import { rem } from "shared/utils/style-utils"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  align-self: center;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${rem(40)};
  gap: ${rem(8)};
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  backgorund-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px -7px rgba(15, 16, 16, 1);
  border-radius: ${rem(8)};
  max-width: 700px;
  padding: ${rem(20)};
  gap: ${rem(20)};
  align-self: center;
`
