function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}

let result = solution([293, 1000, 395, 678, 94]);
console.log(result);
