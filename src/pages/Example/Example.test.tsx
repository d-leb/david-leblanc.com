import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { getIntlText, render } from 'devtools/testing-library'
import { Example } from './index'

expect.extend(toHaveNoViolations)

describe('Example', () => {
  it('renders without error', () => {
    const { getByText } = render(<Example />)
    const placeholderText = getByText(getIntlText('heading.example'))

    expect(placeholderText).toBeDefined()
  })

  it('adheres to accessibility standards', async () => {
    const { container } = render(<Example />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
