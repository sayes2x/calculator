const handlePlusMinus = (...que) => {
  while (que.findIndex(elem => /\s[\+\-]\s/.test(elem)) !== -1) {
    const index = que.findIndex(elem => /\s[\+\-]\s/.test(elem));
    const func = /\+/.test(que[index]) ? (x, y) => x + y : (x, y) => x - y;
    const result = func(+que[index - 1], +que[index + 1]);
    que.splice(index - 1, 3, result);
  }
  return que;
};

export default handlePlusMinus;
