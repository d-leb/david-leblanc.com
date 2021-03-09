import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { Color, Colors } from 'styles'
import { MessageValues } from 'utils/internationalization'

interface Props {
  bold?: boolean
  color?: Color
  italic?: boolean
  messageId: string
  messageValues?: MessageValues
  size?: number
}

type StyledProps = Omit<Props, 'messageId' | 'messageValues'>

const StyledText = styled.span<StyledProps>`
  font-size: ${(props) => (props.size ? props.size : '1')}em;
  ${(props) => (props.bold ? 'font-weight: 600;' : '')}
  ${(props) => (props.italic ? 'font-style: italic;' : '')}
  ${(props) => (props.color ? `color: ${Colors[props.color]};` : '')}
`

export const Text = ({ bold, color, italic, messageId, messageValues, size }: Props) => {
  const { formatMessage } = useIntl()
  return <StyledText {...{ bold, color, italic, size }}>{formatMessage({ id: messageId }, messageValues)}</StyledText>
}
