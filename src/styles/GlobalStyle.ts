import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { Colors } from 'styles/Colors'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.IVORY};

    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Colors.JET};

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
    }
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.4em;
    }
  }
`
