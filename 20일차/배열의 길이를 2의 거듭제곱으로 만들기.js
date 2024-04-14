// Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.
// Math.log2() 함수는 숫자를 log2(숫자)로 반환합니다.

function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}

// const solution = (arr) => {
//   let num = 1;
//   while (arr.length > num) {
//     num *= 2;
//   }
//   while (arr.length !== num) {
//     arr.push(0);
//   }
//   return arr;
// };

let result = solution([1, 2, 3, 4, 5, 6]);
console.log(result);
