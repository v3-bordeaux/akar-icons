import React from 'react';
import PropTypes from 'prop-types';

const Dice6 = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
      <path d="M8 8h.5"></path>
      <path d="M8.25 7.75v.5"></path>
      <path d="M8.25 11.75v.5"></path>
      <path d="M8.25 15.75v.5"></path>
      <path d="M15.5 8h.5"></path>
      <path d="M15.75 7.75v.5"></path>
      <path d="M15.75 11.75v.5"></path>
      <path d="M15.75 15.75v.5"></path>
      <path d="M8 12h.5"></path>
      <path d="M15.5 12h.5"></path>
      <path d="M8 16h.5"></path>
      <path d="M15.5 16h.5"></path>
    </svg>
  );
};

Dice6.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Dice6;
