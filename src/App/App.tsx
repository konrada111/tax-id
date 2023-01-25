import React from "react"
import Home from "Home"
import theme from "shared/constants/theme"
import { GlobalStyle } from "shared/styles/GlobalStyle"
import { ThemeProvider } from "styled-components"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
