// toUpperCase 모든 문자를 대문자로 변경
// toLowerCase 모든 문자를 소문자로 변경
// includes() 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환합니다.

function solution(myString, pat) {
  return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}

// function solution(myString, pat) {
//   return +myString.toUpperCase().includes(pat.toUpperCase());
// }

let result = solution('AbCdEfG', 'aBc');
console.log(result);
