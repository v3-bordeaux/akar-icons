import React from 'react';
import PropTypes from 'prop-types';

const ToggleOn = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M17 7H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10z"></path>
      <path d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
    </svg>
  );
};

ToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ToggleOn;
