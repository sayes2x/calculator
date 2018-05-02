import calculateResult from './calculateResult';

const keyEqual = (key, ...que) => {
  //Que Conditions
  const elementCount3Plus = que.length >= 3;
  const lastElement = que.length - 1;
  const lastElementNumber = /[\d\.]/.test(que[lastElement]);
  const lastElementEndDot = /\.$/.test(que[lastElement]);
  const lastElementPercent = /%/.test(que[lastElement]);
  const lastElementOperation = /[\+\-x÷]/.test(que[lastElement]);

  if (elementCount3Plus) {
    if (lastElementEndDot) {
      var numberDot = que.pop();
      numberDot = numberDot.replace(/\.$/, '');
      que.push(numberDot);
    }
    if (lastElementNumber || lastElementPercent) {
      que.push(key);
      que.push(calculateResult(...que));
    }
    if (lastElementOperation) {
      que.pop();
      que.push(key);
      que.push(calculateResult(...que));
    }
  }
  return que;
};

export default keyEqual;
