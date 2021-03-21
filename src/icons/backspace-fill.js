import React from 'react';
import PropTypes from 'prop-types';

const BackspaceFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
      id="BackspaceFill"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.6 4.2A3 3 0 019 3h11a3 3 0 013 3v12a3 3 0 01-3 3H9a3 3 0 01-2.4-1.2l-4.5-6a3 3 0 010-3.6l4.5-6zm11.107 5.507a1 1 0 00-1.414-1.414L14 10.586l-2.293-2.293a1 1 0 10-1.414 1.414L12.586 12l-2.293 2.293a1 1 0 001.414 1.414L14 13.414l2.293 2.293a1 1 0 001.414-1.414L15.414 12l2.293-2.293z"
      ></path>
    </svg>
  );
};

BackspaceFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BackspaceFill.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default BackspaceFill;
