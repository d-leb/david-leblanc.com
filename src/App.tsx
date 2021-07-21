import React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

import { About, Contact, Intro, Portfolio } from 'pages'

export const App = () => {
  const { formatMessage } = useIntl()
  const siteName = formatMessage({ id: 'site.name' })
  return (
    <main>
      <Helmet>
        <title>{siteName}</title>
      </Helmet>
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
