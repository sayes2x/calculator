const keyOperation = (key, ...que) => {
  //Que Conditions
  const lastElement = que.length - 1;
  const lastElementNumber = /[\d\.]/.test(que[lastElement]);
  const lastElementEndDot = /\.$/.test(que[lastElement]);
  const lastElementPercent = /%/.test(que[lastElement]);
  const lastElementOperation = /[\+\-x÷]/.test(que[lastElement]);

  if (lastElementEndDot) {
    var numberDot = que.pop();
    numberDot = numberDot.replace(/\.$/, '');
    que.push(numberDot);
  }
  if (lastElementNumber || lastElementPercent) {
    que.push(key);
  }
  if (lastElementOperation) {
    que.pop();
    que.push(key);
  }

  return que;
};

export default keyOperation;
