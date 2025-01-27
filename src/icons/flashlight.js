import React from 'react';
import PropTypes from 'prop-types';

const Flashlight = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M5 4v1c0 1.636 2 4 3 5l.75 9.01a3.26 3.26 0 0 0 6.5 0L16 10c1-1 3-3.364 3-5V4"></path>
      <path d="M12 11v2"></path>
      <path d="M12 6c3.866 0 7-.895 7-2s-3.134-2-7-2-7 .895-7 2 3.134 2 7 2z"></path>
    </svg>
  );
};

Flashlight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Flashlight;
