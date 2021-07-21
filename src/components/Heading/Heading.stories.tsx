import React from 'react'

import { Colors } from 'styles'
import { messages } from 'translations'
import { Heading as HeadingComponent } from './index'

export default {
  title: 'Design System/Components/Heading',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [...Object.keys(Colors)],
      },
    },
    level: {
      control: {
        type: 'range',
        min: 1,
        max: 6,
        step: 1,
      },
    },
    capitalize: {
      control: {
        type: 'boolean',
      },
    },
    messageId: {
      control: {
        type: 'select',
        options: [...Object.keys(messages.en)],
      },
    },
    messageValues: {
      control: {
        type: 'object',
      },
    },
  },
}

type Props = Parameters<typeof HeadingComponent>[0]
export const Heading = (props: Props) => <HeadingComponent {...props} />
Heading.args = {
  color: undefined,
  level: 2,
  messageId: 'lorem-ipsum.sentence-01',
  messageValues: undefined,
}
