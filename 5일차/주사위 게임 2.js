function solution(a, b, c) {
  let sum1 = a + b + c;
  let sum2 = a ** 2 + b ** 2 + c ** 2;
  let sum3 = a ** 3 + b ** 3 + c ** 3;

  if (a == b && b == c && a == c) {
    return sum1 * sum2 * sum3;
  } else if (a == b || b == c || a == c) {
    return sum1 * sum2;
  }
  return sum1;
}

let result = solution(4, 4, 4);
console.log(result);
