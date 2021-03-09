import React from 'react'
import styled from 'styled-components'

import { Heading, NavigationBanner } from 'components'
import { Breakpoints, Color, Colors } from 'styles'

interface Props {
  colorBand: Color
  titleId: string
}

type WrapperProps = Pick<Props, 'colorBand'>

const Wrapper = styled.header<WrapperProps>`
  display: block;
  background-color: ${(props) => Colors[props.colorBand]};
  width: 100%;
  min-height: 350px;

  @media ${Breakpoints.Mobile} {
    min-height: auto;
  }
`

const Content = styled.div`
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 40px 40px 40px;

  @media ${Breakpoints.Mobile} {
    padding: 20px 20px 5px 20px;
  }
`

export const ColorBand = ({ colorBand, titleId }: Props) => (
  <Wrapper {...{ colorBand }}>
    <NavigationBanner />
    <Content>
      <Heading level={1} color="IVORY" messageId={titleId} />
    </Content>
  </Wrapper>
)
