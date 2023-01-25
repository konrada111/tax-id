import { createGlobalStyle } from "styled-components"
import reset from "./reset"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    width: 100%;
    height: 100%;
  }
  #root:first-of-type {
    height: 100%;
  }
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  a, button{
    font-family: 'Lato', sans-serif;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
`
