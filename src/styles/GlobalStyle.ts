import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    font-weight: 300;
    font-size: 1em
  }
`
