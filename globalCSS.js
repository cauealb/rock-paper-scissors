import { createGlobalStyle } from 'styled-components'

export const GlobalCSS = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        min-height: 100vh;
        font-family: monospace;
    }
`;