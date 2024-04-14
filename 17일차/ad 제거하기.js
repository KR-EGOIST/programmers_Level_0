// filter() 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고,
// 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.

function solution(strArr) {
  return strArr.filter((v) => !v.includes('ad'));
}

// function solution(strArr) {
//   var answer = [];
//   for (let i of strArr) {
//     if (!i.includes('ad')) {
//       answer.push(i);
//     }
//   }
//   return answer;
// }

let result = solution(['and', 'notad', 'abcd']);
console.log(result);
