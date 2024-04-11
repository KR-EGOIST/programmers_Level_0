function solution(my_string, index_list) {
  let answer = '';
  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }
  return answer;
}

// join(빈문자) - 배열을 띄어쓰기 없이 문자열로 만들어준다.

// function solution(my_string, index_list) {
//   return index_list.map((i) => my_string[i]).join('');
// }

let result = solution(
  'cvsgiorszzzmrpaqpe',
  [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]
);
console.log(result);
