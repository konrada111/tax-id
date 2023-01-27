import React, { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import theme from "shared/constants/theme"
import { GlobalStyle } from "shared/styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import store from "app/store"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
