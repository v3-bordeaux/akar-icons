import React from 'react';
import PropTypes from 'prop-types';

const AlignRight = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M22 3v18"></path>
      <path d="M18 6H2v4h16V6z"></path>
      <path d="M18 14H8v4h10v-4z"></path>
    </svg>
  );
};

AlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AlignRight;
