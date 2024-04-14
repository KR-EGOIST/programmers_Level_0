// BigInt 는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
// BigInt는 정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성할 수 있습니다.

// BigInt 를 생성할 때는 숫자 뒤에 n 또는 N 을 붙여서 표현
// const bigIntNumber = 9008199254740992n;
// console.log(bigIntNumber); // 출력 : 9008199254740992n

function solution(a, b) {
  return String(BigInt(a) + BigInt(b));
}

let result = solution('582', '734');
console.log(result);
