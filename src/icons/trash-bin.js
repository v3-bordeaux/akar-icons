import React from 'react';
import PropTypes from 'prop-types';

const TrashBin = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M3 4l2.303 14.076a4 4 0 0 0 2.738 3.167l.328.104a12 12 0 0 0 7.262 0l.328-.104a4 4 0 0 0 2.738-3.166L21 4"></path>
      <path d="M12 6c4.97 0 9-.895 9-2s-4.03-2-9-2-9 .895-9 2 4.03 2 9 2z"></path>
    </svg>
  );
};

TrashBin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TrashBin;
