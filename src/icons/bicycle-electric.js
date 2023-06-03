import React from 'react';
import PropTypes from 'prop-types';

const BicycleElectric = ({
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
      <path d="M6 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
      <path d="M6 15l2-7h7.5"></path>
      <path d="M6 5h3"></path>
      <path d="M19 5h-4l1.9 6.333"></path>
      <path d="M19 5h.5a1.5 1.5 0 0 1 0 3H19"></path>
      <path d="M19.667 11.333l-1.667 4h3.333l-1.666 4"></path>
    </svg>
  );
};

BicycleElectric.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default BicycleElectric;
