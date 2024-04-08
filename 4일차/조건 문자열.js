function solution(ineq, eq, n, m) {
  var answer = 0;
  if (eq === '=' && n === m) {
    answer = 1;
  } else if (ineq === '>' && n > m) {
    answer = 1;
  } else if (ineq === '<' && n < m) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}

let result = solution('<', '=', 20, 50);
console.log(result);

// const operations = {
//   '>=': (n, m) => n >= m,
//   '<=': (n, m) => n <= m,
//   '>!': (n, m) => n > m,
//   '<!': (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }
