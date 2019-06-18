import React from 'react';

import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getHistory } from './store';
import Home from './containers/home';

const Navigator = () => (
  <ConnectedRouter history={getHistory()}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </ConnectedRouter>
);

export default Navigator;
