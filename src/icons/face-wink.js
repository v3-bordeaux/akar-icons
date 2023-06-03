import React from 'react';
import PropTypes from 'prop-types';

const FaceWink = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M7 9h2"></path>
      <path d="M16 9.05v-.1"></path>
      <path d="M16 15c-.5 1-1.79 2-4 2s-3.5-1-4-2"></path>
    </svg>
  );
};

FaceWink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default FaceWink;
