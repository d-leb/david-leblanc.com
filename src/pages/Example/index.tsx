import React from 'react'
import { Helmet } from 'react-helmet'

import { Placeholder } from 'components/Placeholder'
import { getPageTitle } from 'utils/navigation'

export const Example = () => (
  <>
    <Helmet>
      <title>{getPageTitle('Example')}</title>
    </Helmet>
    <Placeholder text="Example" />
  </>
)
