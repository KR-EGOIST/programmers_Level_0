function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((prev, cur) => prev + cur, 0);
  } else {
    return num_list.reduce((prev, cur) => prev * cur, 1);
  }
}

// const solution = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));

let result = solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]);
console.log(result);
