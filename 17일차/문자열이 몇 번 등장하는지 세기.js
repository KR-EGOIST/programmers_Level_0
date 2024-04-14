function solution(myString, pat) {
  let count = 0;
  let index = myString.indexOf(pat);

  while (index !== -1) {
    count++;
    index = myString.indexOf(pat, index + 1);
  }

  return count;
}

// function solution(myString, pat) {
//   let count = 0;
//   for (let i = 0; i <= myString.length - pat.length; i++) {
//     if (myString.slice(i, i + pat.length) === pat) {
//       count++;
//     }
//   }

//   return count;
// }

let result = solution('aaaa', 'aa');
console.log(result);
