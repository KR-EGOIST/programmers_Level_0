// filter 안에 인자로 함수를 받고, index 만 필요하니 명시해주자

// includes() 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환합니다.
// 즉, indices에서 일치하는 요소는 제거해야하기 때문에 !indices.includes(i)를 통해서 indices에 i가 포함되어있지 않은 값만을 남길 수 있다.

function solution(my_string, indices) {
  let answer = [...my_string].filter((_, i) => {
    return !indices.includes(i);
  });

  return answer.join('');
}

// function solution(m, a) {
//   var answer = '';

//   for (let i = 0; i < m.length; i++) {
//     if (!a.includes(i)) {
//       answer += m[i];
//     }
//   }

//   return answer;
// }

let result = solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3]);
console.log(result);
