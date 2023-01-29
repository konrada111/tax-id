import ButtonComponent from "shared/components/Button"
import { font, rem } from "shared/utils/style-utils"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    ". form rightSide"
    ". recent rightSide"
    "leftSide box rightSide";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 1fr 1.5fr;

  @media (max-width: 992px) {
    grid-template-areas:
      "form"
      "recent"
      "box";
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 1fr;
    padding: 5%;
  }
`

export const Button = styled(ButtonComponent)`
  margin-top: ${rem(4)};
`

export const LeftSide = styled.div`
  grid-area: leftSide;
  @media (max-width: 992px) {
    display: none;
  }
`
export const RightSide = styled.div`
  grid-area: rightSide;
  margin-top: ${rem(50)};

  @media (max-width: 992px) {
    display: none;
  }
`

export const ReacentWrapper = styled.div`
  grid-area: recent;
  display: flex;
  flex-direction: column;
`

export const FormWrapper = styled.div`
  grid-area: form;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-self: center;
  margin: ${rem(40)} 0 ${rem(20)} 0;
  gap: ${rem(16)};
  flex-basis: 100%;
`

export const RecentSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${rem(20)};
  align-self: center;
  margin-top: ${rem(20)};
`

export const Box = styled.div`
  grid-area: box;
  margin-top: ${rem(50)};
  display: flex;
  flex-direction: column;
  backgorund-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px -7px rgba(15, 16, 16, 1);
  border-radius: ${rem(8)};

  padding: ${rem(20)};
  gap: ${rem(20)};
  align-self: center;
`
export const Image = styled.img`
  margin-left: ${rem(40)};
`

export const Info = styled.p`
  text-align: center;
  ${font("Lato", 18, 400, 26)};
  color: ${({ theme }) => theme.colors.black};
`
