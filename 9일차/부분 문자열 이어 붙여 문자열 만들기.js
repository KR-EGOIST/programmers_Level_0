function solution(my_strings, parts) {
  let answer = '';

  parts.forEach(([s, e], i) => {
    answer += [...my_strings[i]].slice(s, e + 1).join('');
  });
  return answer;
}

// function solution(my_strings, parts) {
//   return parts
//     .map(([s, e], i) => {
//       return my_strings[i].slice(s, e + 1);
//     })
//     .join('');
// }

let result = solution(
  ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ]
);
console.log(result);
