function solution(intStrs, k, s, l) {
  var answer = [];
  let temp = [];

  intStrs.forEach((v) => {
    temp = [...v].slice(s, s + l).join('');
    if (Number(temp) > k) {
      answer.push(Number(temp));
    }
  });
  return answer;
}

// function solution(intStrs, k, s, l) {
//   return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
// }

let result = solution(
  ['0123456789', '9876543210', '9999999999999'],
  50000,
  5,
  5
);
console.log(result);
