import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { GlobalCSS } from "../globalCSS"

export function App() {

  return (
    <>
    <ThemeProvider theme={theme}>

      <GlobalCSS />
    </ThemeProvider> 
    </>
  )
}