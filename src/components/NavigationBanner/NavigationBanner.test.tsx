import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { render } from 'devtools/testing-library'
import { messages } from 'translations'
import { NavigationBanner } from './index'

expect.extend(toHaveNoViolations)

describe('NavigationBanner', () => {
  it('renders without error', () => {
    const { getByText } = render(<NavigationBanner />)

    const siteName = getByText(messages.en['site.name'])
    expect(siteName).toBeDefined()

    const headingContact = getByText(messages.en['heading.contact'])
    expect(headingContact).toBeDefined()
  })

  it('adheres to accessibility standards', async () => {
    const { container } = render(<NavigationBanner />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
