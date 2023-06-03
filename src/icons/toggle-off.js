import React from 'react';
import PropTypes from 'prop-types';

const ToggleOff = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M7 17A5 5 0 1 0 7 7a5 5 0 0 0 0 10z"></path>
    </svg>
  );
};

ToggleOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ToggleOff;
