function solution(number, n, m) {
  var answer = 0;
  if (number % n == 0 && number % m == 0) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}

let result = solution(60, 2, 3);
console.log(result);
