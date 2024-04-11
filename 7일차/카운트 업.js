function solution(start_num, end_num) {
  var answer = [];

  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

// Array(배열의 크기)
// .fill(값) - 배열의 요소를 전부 같은 값으로 초기화
// .map 함수 - 매핑된 결과를 새로운 배열로 반환

// function solution(start, end) {
//   return Array(end - start + 1)
//     .fill(start)
//     .map((v, i) => v + i);
// }

let result = solution(3, 10);
console.log(result);
