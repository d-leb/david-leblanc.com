import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { render } from 'devtools/testing-library'
import { messages } from 'translations'
import { Link } from './index'

expect.extend(toHaveNoViolations)

describe('Link', () => {
  const messageId = 'lorem-ipsum.sentence-01'

  it('renders without error', () => {
    const { getByText } = render(<Link {...{ messageId }} to="#null" />)
    const renderedText = getByText(messages.en[messageId])

    expect(renderedText).toBeDefined()
  })

  it('adheres to accessibility standards', async () => {
    const { container } = render(<Link {...{ messageId }} to="#null" />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
