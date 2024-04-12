// indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환합니다.

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

// searchElement
// 배열에서 위치를 찾을 요소입니다.

// fromIndex <Optional>
// 검색을 시작할 0 기반 인덱스로, 정수로 변환됩니다.

// 음수 인덱스는 배열의 끝부터 거꾸로 셉니다.
// 즉, fromIndex < 0이면, fromIndex + array.length가 사용됩니다. 그러나, 이 경우에도 배열은 여전히 앞에서 뒤로 검색됩니다.
// fromIndex < -array.length이거나 fromIndex가 생략되면, 0이 사용되어 전체 배열이 검색됩니다.
// fromIndex >= array.length 이면, 배열은 검색되지 않고 -1이 반환됩니다.

function solution(arr, idx) {
  return arr.indexOf(1, idx);
}

let result = solution([1, 1, 1, 1, 0], 3);
console.log(result);
