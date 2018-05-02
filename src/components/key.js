import React from 'react';

const Key = props => {
  const { name } = props;

  const handleClick = () => {
    props.onClick(name);
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
