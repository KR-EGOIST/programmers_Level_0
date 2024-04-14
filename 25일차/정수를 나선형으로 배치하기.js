/* 2차원 배열을 만드는 방법 */

/*
초기값 할당
let arr = [[], [], [], ...];
*/

/*
반복문 사용
let arr = new Array(n);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(n);
  // arr[i] = []; 속 배열 비어있다면
}
*/

/*
ES6 지원 브라우저라면
2차원 배열 틀 생성 [[],[],[]]
let arr = Array.from(Array(n), () => []);

arr[i][j] (빈 배열 생성)
let arr = Array.from(Array(i), () => new Array(j));

arr[i][j] (null로 초기화하여 생성)
let arr = Array.from(Array(i), () => Array.fill(null));
*/

function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0)); // n x n 배열 생성

  let num = 1; // 시작 숫자
  let row = 0; // 행의 시작 인덱스
  let col = 0; // 열의 시작 인덱스

  for (let i = n; i > 0; i -= 2) {
    // 오른쪽으로 이동
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--;
    row++;

    // 아래로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    row--;
    col--;

    // 왼쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++;
    row--;

    // 위로 이동
    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }

  return result;
}

let result = solution(5);
console.log(result);

// function solution(n) {
//   const move = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];
//   const answer = Array.from(new Array(n), () => new Array(n).fill(0));
//   let x = 0,
//     y = 0,
//     dir = 0,
//     num = 1;
//   while (num <= n * n) {
//     answer[x][y] = num;
//     let nextX = x + move[dir][0];
//     let nextY = y + move[dir][1];
//     if (
//       nextX >= n ||
//       nextX < 0 ||
//       nextY >= n ||
//       nextY < 0 ||
//       answer[nextX][nextY] !== 0
//     ) {
//       dir = (dir + 1) % 4;
//       nextX = x + move[dir][0];
//       nextY = y + move[dir][1];
//     }
//     x = nextX;
//     y = nextY;
//     num++;
//   }
//   return answer;
// }
