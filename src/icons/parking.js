import React from 'react';
import PropTypes from 'prop-types';

const Parking = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <g clipPath="url(#clip0_7_2148)">
        <circle cx="12" cy="12" r="11"></circle>
      </g>
      <path d="M9.5 16.5v-3.6m0 0h3.428c.857 0 2.572 0 2.572-2.7s-1.715-2.7-2.572-2.7H9.5v5.4z"></path>
      <defs>
        <clipPath id="clip0_7_2148">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Parking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Parking;
