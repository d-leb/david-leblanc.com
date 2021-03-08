import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import React from 'react'
import styled from 'styled-components'

import Providers from 'Providers'
import { GlobalStyle } from 'styles/GlobalStyle'

const Wrapper = styled.div`
  margin: 20px;
`

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

export const parameters = {
  controls: { expanded: true },
}

export const decorators = [
  (Story) => (
    <Providers>
      <Wrapper>
        <GlobalStyle />
        <Story />
      </Wrapper>
    </Providers>
  ),
]
