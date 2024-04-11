function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    let temp = `${i}`;
    // every 함수
    // value 값에 대한 조건이 전부 참이여야만 true 를 반환한다.
    if ([...temp].every((v) => v == '5' || v == '0')) {
      answer.push(i);
    } else {
      continue;
    }
  }
  return answer.length ? answer : [-1];
}

let result = solution(10, 20);
console.log(result);

// function solution(l, r) {
//     const result = Array.from({length:r-l+1}, (_,i)=>i+l).filter(n=>!/[^05]/.test(n));
//     return result.length ? result : [-1];
// }
// <특정문자가 포함됐는지 알고 싶을때의 정규식을 구하는 방법>
// /05/ : "05"라는 연속된 문자열을 찾는다. (정확하게 "05"인 문자열 - 순서상관O)
// /[05]/: "0" 또는 "5"가 나오는 경우를 모두 찾는다 (0 또는 5를 독립적으로 취급 - 순서상관X)
// /^[05]/: 문자열의 시작 부분에 "0" 또는 "5"가 있는 경우 (0 또는 5를 독립적으로 취급 - 순서상관X)
// /^[05]$/: 문자열의 전체가 단일한 "0"또는 "5"로 이루어진 경우 (문자열의 길이가 1, 값이 0 또는 5인경우)
// /^[05]+$/: 문자열의 전체가 "0"또는 "5"로 이루어진 경우 (문자열의 길이1이어도 되고 더 길어도 됨)

// 숫자 5로 현혹시켰지만 사실 이건 이진수 문제임.
// function* gen50() {
//     let i = 1;

//     while(true) {
//         yield Number(Number(i).toString(2)) * 5;
//         i++;
//     }
// }
// function solution(l, r) {
//     const n = gen50();
//     let a = 0;
//     const arr = [];

//     while(a < l) { a = n.next().value; }
//     while(a <= r) { arr.push(a); a = n.next().value; }

//     return arr.length ? arr : [-1];
// }
