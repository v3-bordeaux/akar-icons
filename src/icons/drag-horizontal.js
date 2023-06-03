import React from 'react';
import PropTypes from 'prop-types';

const DragHorizontal = ({
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
      <path d="M20 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      <path d="M20 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      <path d="M12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      <path d="M12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      <path d="M4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      <path d="M4 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
    </svg>
  );
};

DragHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default DragHorizontal;
