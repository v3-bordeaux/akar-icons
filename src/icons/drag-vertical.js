import React from 'react';
import PropTypes from 'prop-types';

const DragVertical = ({
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
      <path d="M7 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
      <path d="M15 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
      <path d="M7 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
      <path d="M15 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
      <path d="M7 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
      <path d="M15 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
    </svg>
  );
};

DragVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default DragVertical;
