const keyDot = (key, ...que) => {
  //Que Conditions
  const emptyQue = que.length === 0;
  const lastElement = que.length - 1;
  const lastElementOperation = /[\+\-x÷]/.test(que[lastElement]);
  const lastElementNumber = /[\d\.]/.test(que[lastElement]);
  const lastElementHasDot = /\./.test(que[lastElement]);

  if (emptyQue || lastElementOperation) {
    que.push('0.');
  } else if (lastElementNumber && !lastElementHasDot) {
    const newNumber = que.pop().concat(key);
    que.push(newNumber);
  }

  return que;
};

export default keyDot;
