import React from 'react';
import PropTypes from 'prop-types';

const Computing = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M17 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"></path>
      <path d="M8 5V2"></path>
      <path d="M16 5V3l1-1"></path>
      <path d="M16 22v-3"></path>
      <path d="M9 22v-3"></path>
      <path d="M5 8H2"></path>
      <path d="M22 8h-3"></path>
      <path d="M22 16h-3"></path>
      <path d="M5 16H3l-1 1"></path>
    </svg>
  );
};

Computing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Computing;
