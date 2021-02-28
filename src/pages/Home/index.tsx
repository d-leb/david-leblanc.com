import React from 'react'
import { Helmet } from 'react-helmet'

import { Placeholder } from 'components/Placeholder'
import { getPageTitle } from 'utils/navigation'

export const Home = () => (
  <>
    <Helmet>
      <title>{getPageTitle('Home')}</title>
    </Helmet>
    <Placeholder text="Home" />
  </>
)
