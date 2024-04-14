function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

// function solution(my_string, alp) {
//   return [...my_string]
//     .map((v) => (v.includes(alp) ? v.toUpperCase() : v.toLowerCase()))
//     .join('');
// }

let result = solution('programmers', 'p');
console.log(result);
