import React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

import { Placeholder } from 'components/Placeholder'
import { getPageTitle } from 'utils/navigation'

export const Example = () => {
  const { formatMessage } = useIntl()
  const pageTitle = formatMessage({ id: 'heading.example' })
  return (
    <>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <Placeholder text={pageTitle} />
    </>
  )
}
