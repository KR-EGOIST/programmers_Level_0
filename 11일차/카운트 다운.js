function solution(start, end_num) {
  var answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

let result = solution(10, 3);
console.log(result);
