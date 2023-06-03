import React from 'react';
import PropTypes from 'prop-types';

const AlignLeft = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M2 3v18"></path>
      <path d="M22 6H6v4h16V6z"></path>
      <path d="M16 14H6v4h10v-4z"></path>
    </svg>
  );
};

AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AlignLeft;
