import React from 'react';
import PropTypes from 'prop-types';

const Attach = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M6 7.91V16a6 6 0 0 0 12 0V6a4 4 0 0 0-8 0v9.182a2 2 0 1 0 4 0V8"></path>
    </svg>
  );
};

Attach.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Attach;
