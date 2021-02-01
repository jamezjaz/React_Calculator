import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      <p style={{ fontSize: '2rem', textAlign: 'end' }}>
        {result}
      </p>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
