import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Quotes from './pages/Quotes'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/quotes' exact>
        <Quotes />
      </Route>
    </Switch>
  )
}
