import { FC, ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'

import Providers from 'Providers'
import { messages } from 'translations'

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): ReturnType<typeof render> =>
  render(ui, { wrapper: Providers as FC, ...options })

const defaultMessages = messages.en

export const getIntlText = (key: string): RegExp => new RegExp(`${defaultMessages[key]}`, 'i')

export * from '@testing-library/react'

export { customRender as render }
export { defaultMessages as messages }
