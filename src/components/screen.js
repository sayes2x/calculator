import React from 'react';
import PropTypes from 'prop-types';
import Result from './result';
import Que from './que';

const Screen = ({ result, que }) => {
  return (
    <div className="screen">
      <Result result={result} />
      <Que que={que} />
    </div>
  );
};

export default Screen;

Screen.prototype = {
  result: PropTypes.string.isRequired,
  que: PropTypes.string.isRequired
};
