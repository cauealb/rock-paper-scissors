import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { GlobalCSS } from "../globalCSS"
import { Header } from "./Components/Header/Header"

export function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalCSS />
    </ThemeProvider> 
    </>
  )
}