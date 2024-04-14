function solution(n) {
  const arr = Array(n).fill(Array(n).fill(0)); // 2차원 배열 생성

  return arr.map((a, ai) => {
    return a.map((b, bi) => (bi == ai ? 1 : b));
  });
}

// function solution(n) {
//   const answer = Array.from(Array(n), () => Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     answer[i][i] = 1;
//   }

//   return answer;
// }

let result = solution(3);
console.log(result);
