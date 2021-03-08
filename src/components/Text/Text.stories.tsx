import React from 'react'

import { Colors } from 'styles/Colors'
import { messages } from 'translations'
import { Text as TextComponent } from './index'

export default {
  title: 'Design System/Components/Text',
  argTypes: {
    color: {
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

type Props = Parameters<typeof TextComponent>[0]
export const Text = (props: Props) => <TextComponent {...props} />
Text.args = {
  bold: false,
  color: undefined,
  italic: false,
  messageId: 'lorem-ipsum.sentence-01',
  messageValues: undefined,
  size: undefined,
}
