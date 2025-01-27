import React from 'react';
import PropTypes from 'prop-types';

const MoreHorizontal = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
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
      <path d="M4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
      <path d="M20 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
    </svg>
  );
};

MoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default MoreHorizontal;
