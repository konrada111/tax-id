import React from "react"
import { render, screen } from "shared/utils/test-utils"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Row from "./Row"

describe("Row", () => {
  const testLabel = "Row"
  const testValue = "Value test"
  const testIcon = faUser

  test("displays correct label", () => {
    render(<Row label={testLabel} value={testValue} icon={testIcon} />)
    expect(screen.getByTestId("row-label")).toHaveTextContent(testLabel)
  })

  test("displays correct value", () => {
    render(<Row label={testLabel} value={testValue} icon={testIcon} />)
    expect(screen.getByTestId("row-value")).toHaveTextContent(testValue)
  })
  test("displays correct icon", () => {
    render(<Row label={testLabel} value={testValue} icon={testIcon} />)
    expect(screen.getByTestId("row-icon")).toBeInTheDocument()
  })
})
