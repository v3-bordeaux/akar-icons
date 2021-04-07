import React from 'react';
import PropTypes from 'prop-types';

const DoubleCheck = props => {
  const { color, size, ...otherProps } = props;
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
      id="DoubleCheck"
    >
      <path d="M2 12l5.25 5 2.625-3M16 7l-3.5 4"></path>
      <path d="M8 12l5.25 5L22 7"></path>
    </svg>
  );
};

DoubleCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DoubleCheck.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default DoubleCheck;