const operator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return operator[op](Number(a), Number(b));
  // return operator[op](+a, +b);
}

let result = solution('43 + 12');
console.log(result);
