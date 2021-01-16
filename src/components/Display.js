import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div>
      <h4>Display Component</h4>
      <p>
        <span>Result: </span>
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
