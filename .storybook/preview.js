import { ThemeProvider } from "styled-components"
import theme from "shared/constants/theme"
import { GlobalStyle } from "shared/styles/GlobalStyle"
import { addDecorator } from "@storybook/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
))
