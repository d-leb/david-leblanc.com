import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from 'config/routes'
import { Contact } from 'pages/Contact'

export const App = () => (
  <Switch>
    <Route exact path={Routes.Contact} component={Contact} />
    <Redirect to={Routes.Contact} />
  </Switch>
)
