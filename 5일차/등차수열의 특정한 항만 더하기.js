function solution(a, d, included) {
  var answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + d * i;
    }
  }
  return answer;
}

/*
  reduce() : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환

  형태 : arr.reduce(callback[, initialValue])

  파라미터
  첫 번째 : 누산기(acc) , 콜백의 반환값을 누적
  두 번째 : 현재 값(cur)
  세 번째 : 현재 인덱스(idx)
  네 번째 : 원본 배열(src)
*/

// function solution(a, d, included) {
//   return included.reduce(function (acc, cur, i) {
//     return cur ? acc + a + d * i : acc;
//   }, 0);
// }

let result = solution(3, 4, [true, false, false, true, true]);
console.log(result);
