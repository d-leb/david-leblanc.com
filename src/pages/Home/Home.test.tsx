import React from 'react'

import { getIntlText, render } from 'devtools/testing-library'
import { Home } from './index'

describe('Home', () => {
  it('renders without error', () => {
    const { getByText } = render(<Home />)
    const placeholderText = getByText(getIntlText('heading.home'))

    expect(placeholderText).toBeDefined()
  })
})
