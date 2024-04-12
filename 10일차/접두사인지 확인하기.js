// startsWith() 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.

// startsWith(searchString)
// startsWith(searchString, position)

// searchString
// 문자열의 시작 지점에서 탐색할 문자열. 정규표현식이 올 수 없습니다.

// position <Optional>
// searchString을 탐색할 위치. 기본값은 0.

function solution(my_string, is_suffix) {
  let answer = my_string.startsWith(is_suffix) ? 1 : 0;
  return answer;
}

// boolean 앞에 + 해주면 true는 1, false는 0으로 변환해줍니다.
// function solution(my_string, is_prefix) {
//   return +my_string.startsWith(is_prefix);
// }

// function solution(my_string, is_prefix) {
//   return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
// }

let result = solution('banana', 'ban');
console.log(result);
