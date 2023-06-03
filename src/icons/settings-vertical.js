import React from 'react';
import PropTypes from 'prop-types';

const SettingsVertical = ({
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
      <path d="M19 3v4m0 14V11m-7-8v12m0 6v-2M5 3v2m0 16V9"></path>
      <path d="M17 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
      <path d="M10 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
      <path d="M3 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
    </svg>
  );
};

SettingsVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SettingsVertical;
