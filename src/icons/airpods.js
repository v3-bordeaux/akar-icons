import React from 'react';
import PropTypes from 'prop-types';

const Airpods = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M14 7c0 2.21 1.644 4 4 4s4-1.79 4-4-1.644-4-4-4-4 1.79-4 4z"></path>
      <path d="M10 7c0 2.21-1.644 4-4 4S2 9.21 2 7s1.644-4 4-4 4 1.79 4 4z"></path>
      <path d="M14 7v12a2 2 0 1 0 4 0v-8"></path>
      <path d="M14 17h4"></path>
      <path d="M6 17h4"></path>
      <path d="M10 7v12a2 2 0 1 1-4 0v-8"></path>
      <path d="M20 4a5.408 5.408 0 0 0 0 6"></path>
      <path d="M4 4a5.408 5.408 0 0 1 0 6"></path>
    </svg>
  );
};

Airpods.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Airpods;
