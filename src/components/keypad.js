import React from 'react';
import PropTypes from 'prop-types';
import Key from './key';

const Keypad = ({ keys, onClick }) => {
  const handleClick = key => {
    onClick(key);
  };

  const keypad = keys.map(key => {
    return <Key onClick={handleClick} name={key} key={key} />;
  });
  return <div className="keypad">{keypad}</div>;
};

export default Keypad;

Keypad.prototype = {
  key: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
