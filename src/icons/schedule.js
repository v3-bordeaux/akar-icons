import React from 'react';
import PropTypes from 'prop-types';

const Schedule = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3"></path>
      <path d="M8 2v2"></path>
      <path d="M15 2v2"></path>
      <path d="M2 8h19"></path>
      <path d="M18.5 15.643l-1.5 1.5"></path>
      <path d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
    </svg>
  );
};

Schedule.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Schedule;
