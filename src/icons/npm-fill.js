import React from 'react';
import PropTypes from 'prop-types';

const NpmFill = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_1_1967)">
        <mask
          id="a"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path d="M24 0H0v24h24V0z"></path>
        </mask>
        <g mask="url(#a)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0H0v24h24V0zM2.578 2.578H21.42V21.42H16.67V7.33h-4.752V21.42h-9.34V2.578z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_1967">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

NpmFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default NpmFill;
