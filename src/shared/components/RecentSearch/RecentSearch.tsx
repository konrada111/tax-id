import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import {
  Wrapper,
  HeaderWrapper,
  HeaderLabel,
  Label,
} from "./RecentSearch.style"

export interface ReacentSearchProps {
  companyName: string
  vatNumber: string
}

const ReacentSearch = ({ companyName, vatNumber }: ReacentSearchProps) => {
  return (
    <Wrapper>
      <FontAwesomeIcon
        style={{
          color: "grey",
          width: "25px",
          height: "25px",
          border: "1px solid grey",
          padding: "15px",
          borderRadius: "8px",
        }}
        icon={faBuildingColumns}
      />
      <HeaderWrapper>
        <HeaderLabel>{companyName}</HeaderLabel>
        <Label>{vatNumber}</Label>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default ReacentSearch
