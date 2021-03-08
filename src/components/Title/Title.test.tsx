import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { render, waitFor } from 'devtools/testing-library'
import { messages } from 'translations'
import { Title } from './index'

expect.extend(toHaveNoViolations)

describe('Title', () => {
  const messageId = 'lorem-ipsum.sentence-01'

  it('renders without error', async () => {
    render(<Title {...{ messageId }} />)
    await waitFor(() => expect(document.title).toEqual(`${messages.en['site.name']} | ${messages.en[messageId]}`))
  })

  it('adheres to accessibility standards', async () => {
    const { container } = render(<Title {...{ messageId }} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
