import React from 'react';
import PropTypes from 'prop-types';

const Briefcase = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M19 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      <path d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9V6z"></path>
      <path d="M10 12l.211.106a4 4 0 0 0 3.578 0L14 12"></path>
    </svg>
  );
};

Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Briefcase;
