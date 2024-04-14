function solution(strArr) {
  // 객체(Dictionary)
  // key : 문자열 길이 , value : 문자열 개수
  const dict = {};

  // nullish 연산자 '??'를 사용하여 왼쪽 피연산자가 null이나 undefined일 때 오른쪽 피연산자를 반환해 줍니다.
  strArr.forEach((v) => {
    dict[v.length] = dict[v.length] ?? [];
    dict[v.length].push(v);
  });

  // { '1': [ 'a', 'd' ], '2': [ 'bc', 'hi' ], '3': [ 'efg' ] }
  // console.log(dict);

  // Object.values()는 객체 프로퍼티의 값들만 배열로 반환합니다.
  const result = Object.values(dict).map((v) => v.length);

  return Math.max(...result);
}

let result = solution(['a', 'bc', 'd', 'efg', 'hi']);
console.log(result);


// map.set(key, value) – key를 이용해 value를 저장합니다.
// map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.

// counter.get(str.length) || 0
// 값이 있으면 counter.get(str.length) 을 반환하고, 값이 없으면 0 을 반환
// || 는 else 와 같은 의미이다.

// function solution(strArr) {
//   const counter = new Map();
//   for (const str of strArr) {
//     counter.set(str.length, (counter.get(str.length) || 0) + 1);
//   }
//   return Math.max(...counter.values());
// }
