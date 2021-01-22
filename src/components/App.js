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
      total: '',
      next: '',
      // eslint-disable-next-line react/no-unused-state
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
      // eslint-disable-next-line react/no-unused-state
      operation: result.operation,
    });
    // console.log('Testing');
    // console.log(buttonName);
    console.log(stateObj);
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
