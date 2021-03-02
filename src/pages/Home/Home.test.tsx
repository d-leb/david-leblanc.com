import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { getIntlText, render } from 'devtools/testing-library'
import { Home } from './index'

expect.extend(toHaveNoViolations)

describe('Home', () => {
  it('renders without error', () => {
    const { getByText } = render(<Home />)
    const placeholderText = getByText(getIntlText('heading.home'))

    expect(placeholderText).toBeDefined()
  })

  it('adheres to accessibility standards', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
