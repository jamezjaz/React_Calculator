import React from 'react';
import '../styles/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '',
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const stateObj = this.state;
    const result = calculate(stateObj, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result = '0';
    if (operation === '' && total !== '') {
      result = total;
    } else if (next !== '') {
      result = next;
    }
    return (
      <>
        <header className="App-header">
          <h3>REACT CALCULATOR</h3>
        </header>
        <div className="App">
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
