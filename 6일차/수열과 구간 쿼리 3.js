function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let temp = arr[queries[i][0]];
    arr[queries[i][0]] = arr[queries[i][1]];
    arr[queries[i][1]] = temp;
  }
  return arr;
}

// function solution(arr, queries) {
//   queries.forEach( ([a,b]) => {
//       [arr[a],arr[b]] = [arr[b],arr[a]];
//   })
//   return arr;
// }

let result = solution(
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ]
);
console.log(result);
