const handleTimesDivide = (...que) => {
  while (que.findIndex(elem => /[x÷]/.test(elem)) !== -1) {
    const index = que.findIndex(elem => /[x÷]/.test(elem));
    if (
      (que[index + 1] === '0' || que[index + 1] === 0) &&
      /÷/.test(que[index])
    ) {
      throw new Error('Divide by zero error!');
    }
    const func = /x/.test(que[index]) ? (x, y) => x * y : (x, y) => x / y;
    const result = func(+que[index - 1], +que[index + 1]);
    que.splice(index - 1, 3, result);
  }
  return que;
};

export default handleTimesDivide;
