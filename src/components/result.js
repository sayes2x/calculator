import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => {
  return <p className="result">{result}</p>;
};

export default Result;

Result.prototype = {
  result: PropTypes.string.isRequired
};
