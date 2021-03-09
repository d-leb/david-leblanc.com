import React from 'react'

import { Colors } from 'styles'
import { messages } from 'translations'
import { Link as LinkComponent } from './index'

export default {
  title: 'Design System/Components/Link',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [...Object.keys(Colors)],
      },
    },
    hoverColor: {
      control: {
        type: 'select',
        options: [...Object.keys(Colors)],
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
    size: {
      control: {
        type: 'text',
      },
    },
  },
}

type Props = Parameters<typeof LinkComponent>[0]
export const Link = (props: Props) => <LinkComponent {...props} />
Link.args = {
  bold: false,
  color: undefined,
  hoverColor: undefined,
  italic: false,
  messageId: 'lorem-ipsum.sentence-01',
  messageValues: undefined,
  nounderline: false,
  size: undefined,
}
