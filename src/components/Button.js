import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <div>
      <p>
        <button
          type="button"
          className="cal-button"
        >
          {name}
        </button>
      </p>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
