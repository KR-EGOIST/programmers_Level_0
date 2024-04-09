function solution(numLog) {
  let answer = '';

  for (let i = 0; i < numLog.length; i++) {
    let n = numLog[i + 1] - numLog[i];

    switch (n) {
      case 1:
        answer += 'w';
        break;
      case -1:
        answer += 's';
        break;
      case 10:
        answer += 'd';
        break;
      case -10:
        answer += 'a';
        break;
    }
  }
  return answer;
}

// function solution(numLog) {
//   const convert = {
//     1: 'w',
//     '-1': 's',
//     10: 'd',
//     '-10': 'a',
//   };

//   return numLog
//     .slice(1)
//     .map((v, i) => {
//       return convert[v - numLog[i]];
//     })
//     .join('');
// }

let result = solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
console.log(result);
