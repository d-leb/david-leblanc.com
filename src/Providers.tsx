import React, { ReactNode, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'

import { messages } from 'translations'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  const [locale] = useState(navigator.language.split(/[-_]/)[0])
  return (
    <IntlProvider {...{ locale }} messages={messages[locale]} defaultLocale="en">
      <BrowserRouter>{children}</BrowserRouter>
    </IntlProvider>
  )
}

export default Providers
