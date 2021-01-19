/* eslint-disable */

import React from 'react';
import '../styles/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h3>REACT CALCULATOR</h3>
          </header>
          <Display result="5 * 5" />
          <ButtonPanel />
        </div>
      </>
    );
  }
}

export default App;
