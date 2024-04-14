function solution(num_list) {
  let sortArr = num_list.sort((a, b) => a - b);
  let answer = [];

  for (let i = 0; i < 5; i++) {
    answer.push(sortArr[i]);
  }
  return answer;
}

// function solution(num_list) {
//   return num_list.sort((a, b) => a - b).slice(0, 5);
// }

let result = solution([12, 4, 15, 46, 38, 1, 14]);
console.log(result);
