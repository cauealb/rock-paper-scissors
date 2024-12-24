import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { GlobalCSS } from "../globalCSS"
import { Header } from "./Components/Header/Header"
import { Play } from "./Components/Play/Play"

export function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <Play />
      <GlobalCSS />
    </ThemeProvider> 
    </>
  )
}