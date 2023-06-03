import React from 'react';
import PropTypes from 'prop-types';

const Network = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      <path d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      <path d="M15.408 6.512l-6.814 3.975m6.814 7.001l-6.814-3.975"></path>
    </svg>
  );
};

Network.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Network;
