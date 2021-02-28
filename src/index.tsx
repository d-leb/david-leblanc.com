import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'App'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Environment } from 'utils/environment'

const renderApp = () =>
  render(
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  )

if (Environment.mode === 'development') {
  import('@axe-core/react').then((axe) => axe.default(React, ReactDOM, 1000))
}

renderApp()
if (Environment.mode === 'development' && module.hot) {
  module.hot.accept(['App'], () => renderApp())
}
