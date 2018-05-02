import handlePercent from './handlePercent';
import handleTimesDivide from './handleTimesDivide';
import handlePlusMinus from './handlePlusMinus';
import display from './display';

const calculateResult = (...que) => {
  // Handle %
  let percentResult = handlePercent(...que);

  // Handle x & ÷
  let timesDivideResult = [];
  try {
    timesDivideResult = handleTimesDivide(...percentResult);
  } catch (error) {
    timesDivideResult = [error.message];
  }

  if (timesDivideResult[0] === 'Divide by zero error!')
    return timesDivideResult[0];

  // Handle + & -
  que = handlePlusMinus(...timesDivideResult);

  return display(que[0]);
};

export default calculateResult;
