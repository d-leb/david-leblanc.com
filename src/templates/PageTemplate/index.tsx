import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Title } from 'components'
import { Breakpoints, Color } from 'styles'
import { ColorBand } from './ColorBand'

interface Props {
  children: ReactNode
  colorBand: Color
  titleId: string
}

const Main = styled.main`
  display: block;
  width: 100%;
`

const Content = styled.div`
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;

  @media ${Breakpoints.Mobile} {
    padding: 20px;
  }
`

export const PageTemplate = ({ children, colorBand, titleId }: Props) => (
  <>
    <Title messageId={titleId} />
    <ColorBand {...{ colorBand, titleId }} />
    <Main>
      <Content>{children}</Content>
    </Main>
  </>
)
