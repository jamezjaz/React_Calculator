import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import App from './components/App';
import Quotes from './components/Quotes';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quotes" component={Quotes} />
    </Switch>
  </Router>
);

export default Routes;
