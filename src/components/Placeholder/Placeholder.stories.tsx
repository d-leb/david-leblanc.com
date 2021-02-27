import React from 'react'

import { Placeholder as PlaceholderComponent } from './index'

export default {
  title: 'Design System/Base',
  component: PlaceholderComponent,
  argTypes: {
    background: {
      control: {
        type: 'color',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
}

type Props = Parameters<typeof PlaceholderComponent>[0]
export const Placeholder = (props: Props) => <PlaceholderComponent {...props} />
Placeholder.args = {
  background: undefined,
  color: undefined,
  text: undefined,
}
