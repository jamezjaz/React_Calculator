import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = () => {
  const buttonGroups = {
    group1: {
      id: 1,
      group: ['AC', '+/-', '%', '÷'],
    },
    group2: {
      id: 2,
      group: ['7', '8', '9', 'X'],
    },
    group3: {
      id: 3,
      group: ['4', '5', '6', '-'],
    },
    group4: {
      id: 4,
      group: ['1', '2', '3', '+'],
    },
    group5: {
      id: 5,
      group: ['0', '.', '='],
    },
  };

  return (
    <div>
      <div className="calculator-grid">
        {buttonGroups.group1.group.map(btn => (<Button name={btn} key={btn} />))}
      </div>
      <div className="calculator-grid">
        {buttonGroups.group2.group.map(btn => (<Button name={btn} key={btn} />))}
      </div>
      <div className="calculator-grid">
        {buttonGroups.group3.group.map(btn => (<Button name={btn} key={btn} />))}
      </div>
      <div className="calculator-grid">
        {buttonGroups.group4.group.map(btn => (<Button name={btn} key={btn} />))}
      </div>
      <div className="calculator-grid">
        {buttonGroups.group5.group.map(btn => (<Button name={btn} key={btn} className={btn === '0' ? 'span-two' : null} />))}
      </div>
    </div>
  );
};

export default ButtonPanel;
