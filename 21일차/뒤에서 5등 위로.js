function solution(num_list) {
  num_list.sort((a, b) => a - b).splice(0, 5);

  return num_list;
}

// function solution(num_list) {
//   return num_list.sort((a, b) => a - b).splice(5);
// }

let result = solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]);
console.log(result);
