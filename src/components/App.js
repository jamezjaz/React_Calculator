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
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const stateObj = this.state;
    const result = calculate(stateObj, buttonName);
    this.setState = ({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total, next } = this.state;
    const result = total || next || '0';
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h3>REACT CALCULATOR</h3>
          </header>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
