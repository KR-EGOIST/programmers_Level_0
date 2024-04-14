function solution(arr, flag) {
  let answer = [];
  flag.forEach((v, idx) => {
    if (v == true) {
      for (let i = 0; i < arr[idx] * 2; i++) {
        answer.push(arr[idx]);
      }
    } else {
      for (let i = 0; i < arr[idx]; i++) {
        answer.pop();
      }
    }
  });
  return answer;
}

// function solution(arr, flag) {
//   return arr.reduce(
//     (prev, num, i) =>
//       flag[i]
//         ? [...prev, ...new Array(num * 2).fill(num)]
//         : prev.slice(0, -num),
//     []
//   );
// }

let result = solution([3, 2, 4, 1, 3], [true, false, true, false, false]);
console.log(result);
