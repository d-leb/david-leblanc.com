import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Heading } from 'components'
import { Breakpoints, Color, Colors } from 'styles'

interface Props {
  backgroundColor?: Color
  children: ReactNode
  nopadding?: boolean
  titleId?: string
}

const Section = styled.section<Props>`
  display: block;
  width: 100%;
  ${(props) => props.backgroundColor && `background-color: ${Colors[props.backgroundColor]};`}
`

const Content = styled(({ nopadding, ...rest }: Partial<Props>) => <div {...rest} />)<Props>`
  ${(props) =>
    !props.nopadding
      ? `
        max-width: 1180px;
        margin-left: auto;
        margin-right: auto;
        padding: 10px 40px 40px 40px;

        @media ${Breakpoints.Mobile} {
          padding: 10px 20px 20px 20px;
        }
      `
      : ''}
`

const HeadingWrapper = styled.div`
  text-align: center;
`

export const PageTemplate = ({ backgroundColor, children, nopadding, titleId }: Props) => (
  <Section {...{ backgroundColor }}>
    <Content {...{ nopadding }}>
      {titleId && (
        <HeadingWrapper>
          <Heading level={1} color="PAGE_TEXT" capitalize messageId={titleId} />
        </HeadingWrapper>
      )}
      {children}
    </Content>
  </Section>
)
