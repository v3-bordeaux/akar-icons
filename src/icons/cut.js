import React from 'react';
import PropTypes from 'prop-types';

const Cut = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M7 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      <path d="M15 15L7 3"></path>
      <path d="M9 15l3-4.5M17 3l-3 4.5"></path>
      <path d="M17 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    </svg>
  );
};

Cut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Cut;
