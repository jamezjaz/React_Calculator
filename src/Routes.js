import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
