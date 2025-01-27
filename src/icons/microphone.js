import React from 'react';
import PropTypes from 'prop-types';

const Microphone = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M16 6a4 4 0 0 0-8 0v5a4 4 0 0 0 8 0V6z"></path>
      <path d="M18 16.292A7.98 7.98 0 0 1 12 19a7.98 7.98 0 0 1-6-2.708"></path>
      <path d="M12 19v3"></path>
      <path d="M10 22h4"></path>
    </svg>
  );
};

Microphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Microphone;
