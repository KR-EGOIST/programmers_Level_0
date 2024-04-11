function solution(arr, queries) {
  let answer = [];

  queries.forEach(([s, e, k]) => {
    let temp = arr
      // v = value , i = index
      // 작은 것 부터 나열해준다음 제일 작은 0번째 인덱스를 temp 에 저장
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0]; // a-b 오름차순 / b-a 내림차순
    // temp 가 존재하면 temp 를 push
    // temp 가 없으면 -1 을 push
    answer.push(temp ? temp : -1);
  });
  return answer;
}

let result = solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);
console.log(result);
