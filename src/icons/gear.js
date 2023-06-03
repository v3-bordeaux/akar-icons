import React from 'react';
import PropTypes from 'prop-types';

const Gear = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269c0 .578-.396 1.074-.935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231.531.161 1.162-.248 1.572a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0c.41-.41 1.04-.48 1.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286 0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269 0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.106-.253.212-.539.708-.935 1.286-.935.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27z"></path>
      <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
    </svg>
  );
};

Gear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Gear;
