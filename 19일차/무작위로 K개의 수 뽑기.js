function solution(arr, k) {
  const set = new Set(arr); //arr배열에서 중복된 값을 제거하여, set객체에 저장을 한다.

  // 새 배열을 만들고 값을 -1 로 채운다음 기존 배열과 합친다.
  return set.size < k
    ? [...set, ...new Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}

let result = solution([0, 1, 1, 2, 2, 3], 3);
console.log(result);
