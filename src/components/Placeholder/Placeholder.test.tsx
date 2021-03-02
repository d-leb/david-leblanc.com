import React from 'react'

import { render } from 'devtools/testing-library'
import { Placeholder } from './index'

describe('Placeholder', () => {
  it('renders without error', () => {
    const { getByText } = render(<Placeholder />)
    const placeholderText = getByText(/placeholder/i)

    expect(placeholderText).toBeDefined()
  })
})
