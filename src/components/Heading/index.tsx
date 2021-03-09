import React, { HTMLAttributes } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { Color, Colors } from 'styles'
import { MessageValues } from 'utils/internationalization'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  color?: Color
  level?: 1 | 2 | 3 | 4 | 5 | 6
  messageId: string
  messageValues?: MessageValues
}

const HeadingElement = ({ level = 2, messageId, messageValues, ...rest }: Props) => {
  const { formatMessage } = useIntl()
  switch (level) {
    case 1:
      return <h1 {...rest}>{formatMessage({ id: messageId }, messageValues)}</h1>
    case 2:
      return <h2 {...rest}>{formatMessage({ id: messageId }, messageValues)}</h2>
    case 3:
      return <h3 {...rest}>{formatMessage({ id: messageId }, messageValues)}</h3>
    case 4:
      return <h4 {...rest}>{formatMessage({ id: messageId }, messageValues)}</h4>
    case 5:
      return <h5 {...rest}>{formatMessage({ id: messageId }, messageValues)}</h5>
    case 6:
    default:
      return <h6 {...rest}>{formatMessage({ id: messageId }, messageValues)}</h6>
  }
}

export const Heading = styled(HeadingElement)<Props>`
  ${(props) => (props.color ? `color: ${Colors[props.color]};` : '')};
`
