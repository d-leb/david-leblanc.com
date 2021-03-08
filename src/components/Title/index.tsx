import React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

interface Props {
  messageId: string
}

export const Title = ({ messageId }: Props) => {
  const { formatMessage } = useIntl()
  return (
    <Helmet>
      <title>{`${formatMessage({ id: 'site.name' })} | ${formatMessage({ id: messageId })}`}</title>
    </Helmet>
  )
}
