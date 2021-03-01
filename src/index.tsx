import React, { Suspense, lazy } from 'react'
import ReactDOM, { render } from 'react-dom'

import { App } from 'App'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Environment } from 'utils/environment'

const Providers = lazy(() => import(/* webpackMode: "lazy" */ './Providers'))

const renderApp = () =>
  render(
    <Suspense fallback={<></>}>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </Suspense>,
    document.getElementById('root')
  )

if (Environment.mode === 'development') {
  import(/* webpackMode: "lazy" */ '@axe-core/react').then((axe) => axe.default(React, ReactDOM, 1000))
}

renderApp()
if (Environment.mode === 'development' && module.hot) {
  module.hot.accept(['App'], () => renderApp())
}
