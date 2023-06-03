import React from 'react';
import PropTypes from 'prop-types';

const Money = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"></path>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      <path d="M2 9a4 4 0 0 0 4-4"></path>
      <path d="M18 19a4 4 0 0 1 4-4"></path>
    </svg>
  );
};

Money.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Money;
