import React from "react"
import Home from "Home"
import theme from "shared/constants/theme"
import { GlobalStyle } from "shared/styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import store from "app/store"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

export default App
