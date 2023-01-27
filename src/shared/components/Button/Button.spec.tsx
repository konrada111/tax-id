import React from "react"
import { fireEvent, render, screen } from "shared/utils/test-utils"
import Button from "./Button"

describe("Button", () => {
  const testLabel = "Test Button"
  const onClick = jest.fn()
  test("displays correct label", () => {
    render(<Button label={testLabel} />)
    expect(screen.getByRole("button")).toHaveTextContent(testLabel)
  })

  test("onClick works correctly", () => {
    render(<Button label={testLabel} onClick={onClick} />)
    fireEvent.click(screen.getByRole("button"))
    expect(onClick).toBeCalled()
  })
  test("type defined correctly", () => {
    render(<Button label={testLabel} onClick={onClick} type="submit" />)
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit")
  })
})
