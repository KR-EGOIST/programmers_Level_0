function solution(my_string, m, c) {
  var answer = '';
  let temp = [];
  let j = 0;
  for (let i = 0; i < my_string.length; i += m) {
    temp[j++] = my_string.slice(i, i + m);
  }
  temp.forEach((v) => {
    answer += v[c - 1];
  });

  return answer;
}

// function solution(my_string, m, c) {
//   var answer = '';

//   for(let i = 0; i < my_string.length; i += m) {
//       answer += my_string[i + c - 1]
//   }
//   return answer;
// }

let result = solution('ihrhbakrfpndopljhygc', 4, 2);
console.log(result);
