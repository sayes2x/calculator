import React from 'react';
import Key from './key';

const Keypad = props => {
  const handleClick = key => {
    props.onClick(key);
  };

  const keys = props.keys.map(key => {
    return <Key onClick={handleClick} name={key} />;
  });
  return <div className="keypad">{keys}</div>;
};

export default Keypad;
