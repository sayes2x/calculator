const keyPercent = (key, ...que) => {
  //Que Conditions
  const elementCount3Plus = que.length >= 3;
  const lastElement = que.length - 1;
  const lastElementNumber = /[\d\.]/.test(que[lastElement]);
  const lastElementEndDot = /\.$/.test(que[lastElement]);

  if (elementCount3Plus && lastElementNumber) {
    if (lastElementEndDot) {
      var numberDot = que.pop();
      numberDot = numberDot.replace(/\.$/, '');
      que.push(numberDot);
    }
    que.push(key);
  }

  return que;
};

export default keyPercent;
