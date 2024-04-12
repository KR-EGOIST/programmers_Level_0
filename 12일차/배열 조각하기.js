function solution(arr, query) {
  query.forEach((v, i) => {
    if (i % 2 == 0) {
      arr.splice(v + 1);
    } else {
      arr.splice(0, v);
    }
  });

  return arr;
}

let result = solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
console.log(result);
