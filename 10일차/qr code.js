function solution(q, r, code) {
  let answer = '';

  [...code].forEach((v, i) => {
    if (i % q == r) {
      answer += v;
    }
  });

  return answer;
}

// function solution(q, r, code) {
//   return [...code].filter((_, i) => i % q === r).join('');
// }

// function solution(q, r, code) {
//   var answer = '';
//   [...code].map((v, idx) => (idx % q === r ? (answer += v) : answer));
//   return answer;
// }

let result = solution(3, 1, 'qjnwezgrpirldywt');
console.log(result);
