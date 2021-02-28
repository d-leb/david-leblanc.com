import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from 'config/routes'
import { Example } from 'pages/Example'
import { Home } from 'pages/Home'

export const App = () => (
  <main>
    <h1>Placeholder Heading</h1>
    <Switch>
      <Route exact path={Routes.Home} component={Home} />
      <Route exact path={Routes.Example} component={Example} />
      <Redirect to={Routes.Home} />
    </Switch>
  </main>
)
