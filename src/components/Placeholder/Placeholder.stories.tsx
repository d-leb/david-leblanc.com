import React from 'react'

import { Placeholder as PlaceholderComponent, Props as PlaceholderProps } from './index'

export default {
  title: 'Placeholder',
}

export const Placeholder = ({ text }: PlaceholderProps) => <PlaceholderComponent {...{ text }} />
Placeholder.args = {
  text: 'PLACEHOLDER',
}
