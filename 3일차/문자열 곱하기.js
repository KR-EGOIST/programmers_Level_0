function solution(my_string, k) {
  var answer = '';
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}

// str.repeat(k)
// str 을 k 만큼 반복하기
// function solution(my_string, k) {
//   return my_string.repeat(k);
// }

let result = solution('string', 3);
console.log(result);
