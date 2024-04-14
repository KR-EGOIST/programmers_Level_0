// split 구분자가 여러개인 경우 '정규식' 사용
function solution(myStr) {
  let answer = myStr.split(/[a-c]/).filter((v) => v);
  return answer.length ? answer : ['EMPTY'];
}

let result = solution('baconlettucetomato');
console.log(result);
