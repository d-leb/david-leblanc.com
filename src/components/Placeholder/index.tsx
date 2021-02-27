import React from 'react'
import styled from 'styled-components'

export interface Props {
  background?: string
  color?: string
  text?: string
}

type ContainerProps = Pick<Props, 'background' | 'color'>

const Container = styled.div<ContainerProps>`
  display: inline-block;
  padding: 1rem;
  background-color: ${(props) => props.background};
  border-radius: 0.5rem;
  color: ${(props) => props.color};
`

export const Placeholder = ({ background = '#ec603a', color = '#fff', text = 'PLACEHOLDER' }: Props) => (
  <Container {...{ background, color }}>{text}</Container>
)
