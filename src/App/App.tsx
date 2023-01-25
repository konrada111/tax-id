import React from "react"
import theme from "shared/constants/theme"
import { GlobalStyle } from "shared/styles/GlobalStyle"
import { ThemeProvider } from "styled-components"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
