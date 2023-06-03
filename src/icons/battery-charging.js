import React from 'react';
import PropTypes from 'prop-types';

const BatteryCharging = ({
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
      <path d="M18 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
      <path d="M20 10h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20v-4z"></path>
      <path d="M11.4 9L9 12h4l-2.4 3"></path>
    </svg>
  );
};

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default BatteryCharging;
