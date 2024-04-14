function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  });
  return arr;
}

let result = solution(
  [0, 1, 2, 3, 4],
  [
    [0, 1],
    [1, 2],
    [2, 3],
  ]
);
console.log(result);
