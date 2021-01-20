import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick } = props;
  return (
    <div>
      <p>
        <button
          type="button"
          className="cal-button"
          onClick={handleClick}
        >
          {name}
        </button>
      </p>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
