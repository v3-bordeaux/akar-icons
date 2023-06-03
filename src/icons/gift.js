import React from 'react';
import PropTypes from 'prop-types';

const Gift = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M19 8H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"></path>
      <path d="M12 5a3 3 0 1 0-3 3"></path>
      <path d="M15 8a3 3 0 1 0-3-3"></path>
      <path d="M12 5v17"></path>
      <path d="M21 15H3"></path>
    </svg>
  );
};

Gift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Gift;
