function solution(myString) {
  return myString.toLowerCase().replace(/a/g, 'A');
}

// const solution = (s) => s.toLowerCase().replaceAll('a', 'A');

// function solution(myString) {
//   return [...myString]
//     .map((str) => (['a', 'A'].includes(str) ? 'A' : str.toLowerCase()))
//     .join('');
// }

let result = solution('abstract algebra');
console.log(result);
