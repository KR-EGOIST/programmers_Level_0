function solution(n) {
  var answer = [];
  while (n != 1) {
    answer.push(n);

    if (n % 2 == 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
  }
  answer.push(1);

  return answer;
}

// 재귀 함수

// function solution(n, arr = []) {
//   arr.push(n);
//   if (n === 1) return arr;
//   if (n % 2 === 0) return solution(n / 2, arr);
//   return solution(3 * n + 1, arr);
// }

let result = solution(10);
console.log(result);
