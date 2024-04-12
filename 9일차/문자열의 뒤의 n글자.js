function solution(my_string, n) {
  let answer = [...my_string].reverse().slice(0, n).reverse().join('');

  return answer;
}

// function solution(my_string, n) {
//   return my_string.slice(-1 * n);
// }

let result = solution('ProgrammerS123', 11);
console.log(result);
