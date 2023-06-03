import React from 'react';
import PropTypes from 'prop-types';

const Lifesaver = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <g clipPath="url(#clip0_1_1928)">
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
          <path d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142z"></path>
          <path d="M9.172 14.828a4 4 0 1 0 5.656-5.656 4 4 0 0 0-5.656 5.656z"></path>
          <path d="M19.071 4.929l-4.243 4.243"></path>
          <path d="M9.172 14.828l-4.243 4.243"></path>
          <path d="M19.071 19.071l-4.243-4.243"></path>
          <path d="M9.172 9.172L4.929 4.929"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_1928">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Lifesaver.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Lifesaver;
