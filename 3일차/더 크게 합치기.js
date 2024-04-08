function solution(a, b) {
  const num1 = a.toString();
  const num2 = b.toString();
  let answer = 0;

  if (num1 + num2 > num2 + num1) {
    answer = num1 + num2;
  } else if (num1 + num2 < num2 + num1) {
    answer = num2 + num1;
  } else {
    answer = num1 + num2;
  }
  return Number(answer);
}

// Math.max(item1, item2, ...)
// item 들 중에서 가장 큰 수를 반환함.
// function solution(a, b) {
//   return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
// }

let result = solution(9, 91);
console.log(result);
