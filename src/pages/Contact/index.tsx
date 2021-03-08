import React from 'react'

import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Title } from 'components/Title'

export const Contact = () => (
  <main>
    <Title messageId="heading.contact" />
    <Heading messageId="heading.contact" level={1} />
    <Text messageId="lorem-ipsum.sentence-01" />
  </main>
)
