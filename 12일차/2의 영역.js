// indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다.
// 일치하는 값이 없으면 -1을 반환합니다.

// lastIndexOf() 메서드는 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다.
// 일치하는 부분을 찾을 수 없으면 -1을 반환합니다.

function solution(arr) {
  const startIdx = arr.indexOf(2);
  const endIdx = arr.lastIndexOf(2);

  return startIdx == -1 ? [-1] : arr.slice(startIdx, endIdx + 1);
}

let result = solution([1, 2, 1, 4, 5, 2, 9]);
console.log(result);
