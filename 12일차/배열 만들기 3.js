function solution(arr, intervals) {
  var answer = [];
  intervals.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      answer.push(arr[i]);
    }
  });
  return answer;
}

// function solution(arr, intervals) {
//   const [[a,b],[c,d]] = intervals;

//   return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
// }

let result = solution(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 4],
  ]
);
console.log(result);
