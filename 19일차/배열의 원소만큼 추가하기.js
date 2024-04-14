function solution(arr) {
  let answer = [];
  arr.forEach((v) => {
    for (let i = 0; i < v; i++) {
      answer.push(v);
    }
  });
  return answer;
}

// function solution(arr) {
//   return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
// }

let result = solution([5, 1, 4]);
console.log(result);
