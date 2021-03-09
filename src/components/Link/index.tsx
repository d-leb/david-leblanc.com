import React, { ReactNode } from 'react'
import { useIntl } from 'react-intl'
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { Color, Colors } from 'styles'
import { MessageValues } from 'utils/internationalization'

interface Props extends Omit<ReactRouterLinkProps, 'children'> {
  bold?: boolean
  color?: Color
  hoverColor?: Color
  italic?: boolean
  messageId: string
  messageValues?: MessageValues
  nounderline?: boolean
  size?: number
}

type StyledProps = Omit<Props, 'messageId' | 'messageValues'> & { children: ReactNode }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledLink = styled(({ bold, children, color, hoverColor, italic, nounderline, size, ...rest }: StyledProps) => (
  <ReactRouterLink {...rest}>{children}</ReactRouterLink>
))<StyledProps>`
  font-size: ${(props) => (props.size ? props.size : '1')}em;
  ${(props) => (props.bold ? 'font-weight: 600;' : '')}
  ${(props) => (props.italic ? 'font-style: italic;' : '')}
  ${(props) => (props.nounderline ? 'text-decoration: none;' : '')}
  color: ${(props) => (props.color ? Colors[props.color] : Colors.DEEP_SPACE_SPARKLE)};

  &:visited, &:link {
    color: ${(props) => (props.color ? Colors[props.color] : Colors.DEEP_SPACE_SPARKLE)};
  }

  &:active, &:hover {
    color: ${(props) => (props.hoverColor ? Colors[props.hoverColor] : Colors.ALLOY_ORANGE)};
  }
`

export const Link = ({ messageId, messageValues, ...rest }: Props) => {
  const { formatMessage } = useIntl()
  return <StyledLink {...rest}>{formatMessage({ id: messageId }, messageValues)}</StyledLink>
}
