import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { render } from 'devtools/testing-library'
import { messages } from 'translations'
import { Heading } from './index'

expect.extend(toHaveNoViolations)

describe('Heading', () => {
  const messageId = 'lorem-ipsum.sentence-01'

  it('renders without error', () => {
    const { getByText } = render(<Heading {...{ messageId }} />)
    const renderedHeading = getByText(messages.en[messageId])

    expect(renderedHeading).toBeDefined()
  })

  it('adheres to accessibility standards', async () => {
    const { container } = render(<Heading {...{ messageId }} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
