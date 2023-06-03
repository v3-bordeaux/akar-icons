import React from 'react';
import PropTypes from 'prop-types';

const SettingsHorizontal = ({
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
      <path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9"></path>
      <path d="M9 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      <path d="M17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      <path d="M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
    </svg>
  );
};

SettingsHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SettingsHorizontal;
