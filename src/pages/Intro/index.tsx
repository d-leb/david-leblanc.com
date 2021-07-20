import React from 'react'

import { Text } from 'components'
import { PageTemplate } from 'templates/PageTemplate'

export const Intro = () => (
  <PageTemplate nopadding backgroundColor="PAGE_ALT_BACKGROUND">
    <Text messageId="lorem-ipsum.sentence-01" />
  </PageTemplate>
)
