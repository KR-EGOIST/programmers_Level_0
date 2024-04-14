function solution(myString) {
  let answer = [];
  let temp = myString.split('x');
  temp.forEach((v) => {
    answer.push(v.length);
  });
  return answer;
}

// function solution(myString) {
//   return myString.split('x').map((v) => v.length);
// }

let result = solution('oxooxoxxox');
console.log(result);
