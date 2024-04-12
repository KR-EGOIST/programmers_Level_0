function solution(my_string) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i, my_string.length));
  }
  return answer.sort();
}

// function solution(my_string) {
//   return Array.from(my_string)
//     .map((_, i) => my_string.substring(i))
//     .sort();
// }

let result = solution('banana');
console.log(result);
