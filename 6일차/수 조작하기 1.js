function solution(n, control) {
  [...control].forEach(function (e) {
    if (e == 'w') n += 1;
    else if (e == 's') n -= 1;
    else if (e == 'd') n += 10;
    else if (e == 'a') n -= 10;
  });
  return n;
}

let result = solution(0, 'wsdawsdassw');
console.log(result);

// const operations = {
//   w: (n) => n + 1,
//   s: (n) => n - 1,
//   d: (n) => n + 10,
//   a: (n) => n - 10,
// };

// function solution(n, control) {
//   return [...control].reduce((prev, op) => operations[op](prev), n);
// }
