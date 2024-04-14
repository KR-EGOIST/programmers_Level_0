function solution(board, k) {
  let sum = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        sum += board[i][j];
      }
    }
  }

  return sum;
}

// function solution(board, k) {
//   return board.reduce(
//     (total, row, i) =>
//       total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
//     0
//   );
// }

let result = solution(
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
  ],
  2
);
console.log(result);
