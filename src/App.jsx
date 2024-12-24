import { ThemeProvider } from "styled-components"
import { GlobalCSS } from "../../globalCSS"

export function App() {

  return (
    <>
    <ThemeProvider theme={GlobalCSS}>
    </ThemeProvider> 
    </>
  )
}