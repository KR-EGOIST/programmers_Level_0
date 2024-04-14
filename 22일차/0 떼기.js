// Javascript 문자열의 왼쪽에 붙은 0을 제거하기 위해
// 다음의 2가지 방법을 사용할 수 있습니다.

// replace 함수
// 숫자 변환
//  - parseInt()
//  - Number()
//  - *, + 를 이용한 숫자 변환

// 이때, parseInt()는 문자열을 정수로 리턴하므로,
// 문자열이 정수가 아닌 경우에는 값이 달라질 수 있으니, 주의해야 합니다.

function solution(n_str) {
  return n_str.replace(/^0+/, '');
}

// function solution(n_str) {
//   return parseInt(n_str);
//   return Number(n_str);
//   return n_str * 1;
//   return +n_str;
// }

let result = solution('0010');
console.log(result);
