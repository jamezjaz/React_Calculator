import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import App from './components/App';
import Quotes from './components/Quotes';
import Error from './components/Error';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quotes" component={Quotes} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;
