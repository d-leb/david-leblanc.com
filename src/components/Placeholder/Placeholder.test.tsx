import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { render } from 'devtools/testing-library'
import { Placeholder } from './index'

expect.extend(toHaveNoViolations)

describe('Placeholder', () => {
  it('renders without error', () => {
    const { getByText } = render(<Placeholder />)
    const placeholderText = getByText(/placeholder/i)

    expect(placeholderText).toBeDefined()
  })

  it('adheres to accessibility standards', async () => {
    const { container } = render(<Placeholder />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
