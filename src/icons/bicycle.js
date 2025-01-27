import React from 'react';
import PropTypes from 'prop-types';

const Bicycle = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M6 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
      <path d="M18 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
      <path d="M6 15l2-7h7.5"></path>
      <path d="M6 5h3"></path>
      <path d="M18 15L15 5h4"></path>
      <path d="M19 5h.5a1.5 1.5 0 0 1 0 3H19"></path>
    </svg>
  );
};

Bicycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Bicycle;
