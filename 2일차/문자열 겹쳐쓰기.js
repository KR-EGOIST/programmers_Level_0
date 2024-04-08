function solution(my_string, overwrite_string, s) {
  // ... 으로 문자열을 문자 배열로 변환
  let answer = [...my_string];
  // splice(start, deleteCount, item1, item2 ...)
  // start 인덱스 부터 deleteCount 만큼 삭제하고 item 을 붙여씀.
  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join('');
}

console.log(solution('He11oWor1d', 'lloWorld', 2));
// console.log(solution('Program29b8UYP', 'merS123', 7));
