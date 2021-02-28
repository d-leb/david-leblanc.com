import React from 'react'
import ReactDOM, { render } from 'react-dom'

import { App } from 'App'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Environment } from 'utils/environment'

import axe from '@axe-core/react'

const renderApp = () =>
  render(
    <>
      <GlobalStyle />
      <App />
    </>,
    document.getElementById('root')
  )

if (Environment.mode === 'development') {
  axe(React, ReactDOM, 1000)
}

renderApp()
if (Environment.mode === 'development' && module.hot) {
  module.hot.accept(['App'], () => renderApp())
}
