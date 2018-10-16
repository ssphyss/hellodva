import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './components/IndexPage';
import CounterPage from './components/CounterPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counter" exact component={CounterPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;