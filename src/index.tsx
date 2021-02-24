import React from 'react'
import { render } from 'react-dom'

import { App } from 'App'
import { Environment } from 'utils/environment'

const renderApp = () => render(<App />, document.getElementById('root'))

renderApp()
if (Environment.mode === 'development' && module.hot) {
  module.hot.accept(['App'], () => renderApp())
}
