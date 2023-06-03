import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M12 7c4.97 0 9-.895 9-2s-4.03-2-9-2-9 .895-9 2 4.03 2 9 2z"></path>
      <path d="M3 5c0 2.23 3.871 6.674 5.856 8.805A4.197 4.197 0 0 1 10 16.657V19a2 2 0 1 0 4 0v-2.343c0-1.061.421-2.075 1.144-2.852C17.13 11.674 21 7.231 21 5"></path>
    </svg>
  );
};

Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Filter;
