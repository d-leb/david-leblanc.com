import React, { ReactNode } from 'react'
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
  underline?: boolean
}

type StyledProps = Omit<Props, 'messageId' | 'messageValues'> & { children: ReactNode }

const StyledText = styled(({ bold, children, color, italic, size, underline, ...rest }: StyledProps) => (
  <span {...rest}>{children}</span>
))<StyledProps>`
  font-size: ${(props) => (props.size ? props.size : '1')}em;
  ${(props) => (props.bold ? 'font-weight: 600;' : '')}
  ${(props) => (props.italic ? 'font-style: italic;' : '')}
  ${(props) => (props.underline ? 'text-decoration: underline;' : '')}
  ${(props) => (props.color ? `color: ${Colors[props.color]};` : '')}
`

export const Text = ({ messageId, messageValues, ...rest }: Props) => {
  const { formatMessage } = useIntl()
  return <StyledText {...rest}>{formatMessage({ id: messageId }, messageValues)}</StyledText>
}
