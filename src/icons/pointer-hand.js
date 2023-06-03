import React from 'react';
import PropTypes from 'prop-types';

const PointerHand = ({
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
      <path d="M20 16V9.5c0-.828-.641-1.5-1.48-1.5C18 8 17 8.3 17 9.5M8 14V5.52"></path>
      <path d="M20 16c0 4-3.134 6-7 6s-5.196-1-8.196-6l-1.571-2.605c-.536-.868-.107-1.994.881-2.314a1.657 1.657 0 0 1 1.818.552L8 14.033"></path>
      <path d="M14 11V7.5a1.5 1.5 0 0 1 3 0V11"></path>
      <path d="M11 11V6.5a1.5 1.5 0 0 1 3 0V11"></path>
      <path d="M8 11V2.5a1.5 1.5 0 1 1 3 0V11"></path>
    </svg>
  );
};

PointerHand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default PointerHand;
