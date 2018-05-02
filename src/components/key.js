import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ name, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  let className = 'key';
  if (/C/.test(name)) {
    className = 'key clear';
  } else if (/\+/.test(name)) {
    className = 'key twoRows';
  } else if (/\d|\./.test(name)) {
    className = 'key number';
  }
  return (
    <button onClick={handleClick} className={className}>
      <span>{name}</span>
    </button>
  );
};

export default Key;

Key.prototype = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
