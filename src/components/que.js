import React from 'react';
import PropTypes from 'prop-types';

const Que = ({ que }) => {
  return <p className="que">{que}</p>;
};

export default Que;

Que.prototype = {
  que: PropTypes.string.isRequired
};
