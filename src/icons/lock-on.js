import React from 'react';
import PropTypes from 'prop-types';

const LockOn = props => {
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
    >
      <rect x="3" y="10" width="18" height="12" rx="2"></rect>
      <path d="M6 8a6 6 0 016-6v0a6 6 0 016 6v2H6V8z"></path>
    </svg>
  );
};

LockOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LockOn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LockOn;