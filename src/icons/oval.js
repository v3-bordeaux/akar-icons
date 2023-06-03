import React from 'react';
import PropTypes from 'prop-types';

const Oval = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M12 22c4.418 0 8-4.477 8-10S16.418 2 12 2 4 6.477 4 12s3.582 10 8 10z"></path>
    </svg>
  );
};

Oval.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Oval;
