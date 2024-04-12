function solution(my_string, is_suffix) {
  let answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (is_suffix == my_string.slice(i, my_string.length)) answer = 1;
  }
  return answer;
}

// endsWith() 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며,
// 그 결과를 true 혹은 false로 반환한다.

// str.endsWith(searchString[, length])

// searchString - 이 문자열의 끝이 특정 문자열로 끝나는지를 찾기 원하는 문자열입니다.
// length - 옵션입니다. 찾고자 하는 문자열의 길이값이며, 기본값은 문자열 전체 길이입니다.
//          문자열의 길이값은 문자열 전체 길이 안에서만 존재하여야 합니다.

// const solution = (str, suff) => str.endsWith(suff) ? 1 : 0

// function solution(my_string, is_suffix) {
//   return my_string.slice(my_string.length - is_suffix.length) === is_suffix
//     ? 1
//     : 0;
// }

let result = solution('banana', 'ana');
console.log(result);
