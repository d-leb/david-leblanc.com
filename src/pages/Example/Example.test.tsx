import React from 'react'

import { getIntlText, render } from 'devtools/testing-library'
import { Example } from './index'

describe('Example', () => {
  it('renders without error', () => {
    const { getByText } = render(<Example />)
    const placeholderText = getByText(getIntlText('heading.example'))

    expect(placeholderText).toBeDefined()
  })
})
