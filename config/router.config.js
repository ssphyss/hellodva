import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './../src/components/demo/IndexPage';
// import CounterPage from './../src/components/demo/ExampleCounterPage';
import PageCounter from './../src/pages/demo/pagesCounter/pagesCounter';
import PageUser from './../src/pages/demo/pagesUser/pagesUser';


function RouterConfig({ history, app }) {
// function RouterConfig({ history }) {
  // console.log(app);
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/counter" exact component={CounterPage} /> */} 
        <Route path="/" exact component={IndexPage} />        
        <Route path="/counter" exact component={PageCounter} />
        <Route path="/User" exact component={PageUser} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;