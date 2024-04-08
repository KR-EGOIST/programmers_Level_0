function solution(a, b, flag) {
  var answer = 0;
  if (flag) {
    answer = a + b;
  } else {
    answer = a - b;
  }
  return answer;
}

// function solution(a, b, flag) {
//   return flag ? a + b : a - b;
// }

let result = solution(-4, 7, true);
console.log(result);
