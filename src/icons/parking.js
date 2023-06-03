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
      <path d="M9 17.5v-4.2m0 0h4.286c1.07 0 3.214 0 3.214-3.15S14.357 7 13.286 7H9v6.3z"></path>
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
