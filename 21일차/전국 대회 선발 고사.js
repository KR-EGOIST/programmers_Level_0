function solution(rank, attendance) {
  let student = [];
  rank.forEach((v, i) => {
    if (attendance[i] == true) {
      student.push(v);
    }
  });

  let [a, b, c] = student.sort((a, b) => a - b);
  return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}

// function solution(rank, attendance) {
//   const [a, b, c] = rank
//     .map((r, i) => [r, i])
//     .filter(([_, i]) => attendance[i])
//     .sort(([a], [b]) => a - b);
//   return 10000 * a[1] + 100 * b[1] + c[1];
// }

let result = solution(
  [3, 7, 2, 5, 4, 6, 1],
  [false, true, true, true, true, false, false]
);
console.log(result);
