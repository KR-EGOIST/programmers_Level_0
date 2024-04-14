function solution(arr, k) {
  let answer = [];

  if (k % 2 == 1) {
    answer = arr.map((v) => {
      return v * k;
    });
  } else {
    answer = arr.map((v) => {
      return v + k;
    });
  }
  return answer;
}

// const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));

let result = solution([1, 2, 3, 100, 99, 98], 3);
console.log(result);
