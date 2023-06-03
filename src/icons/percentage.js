import React from 'react';
import PropTypes from 'prop-types';

const Percentage = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M5 19L19 5"></path>
      <path d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      <path d="M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    </svg>
  );
};

Percentage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Percentage;
