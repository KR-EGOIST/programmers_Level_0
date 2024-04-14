function solution(myString, pat) {
  return [...myString]
    .map((v) => (v == 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat)
    ? 1
    : 0;
}

// function solution(myString, pat) {
//   return myString.includes(
//     pat.replaceAll('A', 'C').replaceAll('B', 'A').replaceAll('C', 'B')
//   )
//     ? 1
//     : 0;
// }

let result = solution('ABBAA', 'AABB');
console.log(result);
