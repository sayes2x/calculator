import React from 'react';
import Result from './result';
import Que from './que';

const Screen = props => {
  return (
    <div className="screen">
      <Result result={props.result} />
      <Que que={props.que} />
    </div>
  );
};

export default Screen;
