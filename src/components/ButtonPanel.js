import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = props => {
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

  const { clickHandler } = props;

  return (
    <div>
      <div className="button-panel">
        {buttonGroups.group1.group.map(btn => (
          <Button
            name={btn}
            key={btn}
            handleClick={() => clickHandler(btn)}
            color={['÷'].includes(btn) ? 'orange' : ''}
          />
        ))}
      </div>
      <div className="button-panel">
        {buttonGroups.group2.group.map(btn => (
          <Button
            name={btn}
            key={btn}
            handleClick={() => clickHandler(btn)}
            color={['X'].includes(btn) ? 'orange' : ''}
          />
        ))}
      </div>
      <div className="button-panel">
        {buttonGroups.group3.group.map(btn => (
          <Button
            name={btn}
            key={btn}
            handleClick={() => clickHandler(btn)}
            color={['-'].includes(btn) ? 'orange' : ''}
          />
        ))}
      </div>
      <div className="button-panel">
        {buttonGroups.group4.group.map(btn => (
          <Button
            name={btn}
            key={btn}
            handleClick={() => clickHandler(btn)}
            color={['+'].includes(btn) ? 'orange' : ''}
          />
        ))}
      </div>
      <div className="button-panel zero">
        {buttonGroups.group5.group.map(btn => (
          <Button
            name={btn}
            key={btn}
            handleClick={() => clickHandler(btn)}
            color={['='].includes(btn) ? 'orange' : ''}
            wide={btn === '0'}
          />
        ))}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
