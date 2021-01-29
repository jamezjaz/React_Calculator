import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = props => {
  const {
    name, handleClick, color, wide,
  } = props;
  const colorWide = wide ? `${color} wide` : `${color}`;
  return (
    <div>
      <p>
        <button
          type="button"
          className={colorWide}
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
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
