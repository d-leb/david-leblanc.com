import React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

import { Placeholder } from 'components/Placeholder'
import { getPageTitle } from 'utils/navigation'

export const Home = () => {
  const { formatMessage } = useIntl()
  const pageTitle = formatMessage({ id: 'heading.home' })
  return (
    <>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <Placeholder text={pageTitle} />
    </>
  )
}
