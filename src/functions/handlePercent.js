const handlePercent = (...que) => {
  while (que.findIndex(elem => /%/.test(elem)) !== -1) {
    const index = que.findIndex(elem => /%/.test(elem));
    que[index - 1] = percentNumber(que[index - 1], que[index - 2]);
    que[index - 2] = percentOperator(que[index - 2]);
    que.splice(index, 1);
  }
  return que;
};

const percentNumber = (number, operator) => {
  number = number / 100;
  if (/\+/.test(operator)) {
    number += 1;
  } else if (/\-/.test(operator)) {
    number = 1 - number;
  }
  return number;
};

const percentOperator = operator => (/[\+\-]/.test(operator) ? 'x' : operator);

export default handlePercent;
