function solution(num_str) {
  let answer = 0;

  [...num_str].forEach((v) => {
    answer += +v;
  });
  return answer;
}

// function solution(num_str) {
//   return [...num_str].reduce((a, c) => a + +c, 0);
// }

let result = solution('123456789');
console.log(result);
