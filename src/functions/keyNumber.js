const keyNumber = (key, ...que) => {
  // Que conditions
  const emptyQue = que.length === 0;
  const lastElement = que.length - 1;
  const lastElementNumber = /[\d\.]/.test(que[lastElement]);
  const lastElementOnlyZero = /^0$/.test(que[lastElement]);
  const lastElementOperation = /[\+\-x÷]/.test(que[lastElement]);
  let queLengthLessTen;
  emptyQue
    ? (queLengthLessTen = true)
    : (queLengthLessTen = que[lastElement].length < 10);

  if (queLengthLessTen) {
    if (emptyQue || lastElementOperation) {
      que.push(key);
    } else if (lastElementOnlyZero) {
      que.pop();
      que.push(key);
    } else if (lastElementNumber) {
      const newNumber = que.pop().concat(key);
      que.push(newNumber);
    }
  }

  return que;
};

export default keyNumber;
