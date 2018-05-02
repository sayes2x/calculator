import keyNumber from './keyNumber';
import keyOperation from './keyOperation';
import keyEqual from './keyEqual';
import keyAllClear from './keyAllClear';
import keyClear from './keyClear';
import keyDot from './keyDot';
import keyPercent from './keyPercent';

const calcMain = (key, ...que) => {
  const calc = {};

  // handle next key press after equal
  if (/=/.test(que[que.length - 2])) {
    // if operation continue calculating
    if (/[+\-x÷]/.test(key)) {
      que = [que[que.length - 1]];
      // if anything else, start over
    } else {
      que = [];
    }
  }
  // Determine calc.que
  const number = /\d/.test(key);
  if (number) calc.que = keyNumber(key, ...que);
  const operation = /[+\-x÷]/.test(key);
  if (operation) calc.que = keyOperation(key, ...que);
  const equal = /=/.test(key);
  if (equal) calc.que = keyEqual(key, ...que);
  const allClear = /AC/.test(key);
  if (allClear) calc.que = keyAllClear();
  const clear = /^C/.test(key);
  if (clear) calc.que = keyClear(...que);
  const dot = /\./.test(key);
  if (dot) calc.que = keyDot(key, ...que);
  const percent = /%/.test(key);
  if (percent) calc.que = keyPercent(key, ...que);

  // Determine calc.result
  if (calc.que.length === 0) {
    calc.result = '0';
  } else if (calc.que[calc.que.length - 1] === 'Divide by zero error!') {
    calc.result = 'ERROR';
  } else {
    calc.result = lastNumber(...calc.que);
  }

  // Determine calc.displayQue
  if (calc.result === 'ERROR') {
    calc.displayQue = calc.que[calc.que.length - 1];
  } else {
    calc.displayQue = calc.que.join('').slice(-24);
  }

  // return calc object
  return calc;
};

// returns last string that is a 'number' in an array
// this will always return what should be displayed as result
const lastNumber = (...que) => que.filter(n => /\d/.test(n)).pop();

export default calcMain;
