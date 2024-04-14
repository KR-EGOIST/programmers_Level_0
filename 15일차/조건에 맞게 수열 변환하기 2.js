function solution(arr) {
  let x = 0;
  let prevArr = arr;

  while (true) {
    // 현재 배열을 조건에 맞게 변환
    let curArr = prevArr.map((v) => {
      if (v >= 50 && v % 2 == 0) {
        return v / 2;
      } else if (v < 50 && v % 2 == 1) {
        return v * 2 + 1;
      } else {
        return v;
      }
    });

    // every 함수는 배열의 모든 요소가 조건을 충족하는지 확인
    // 하나라도 false를 리턴할 경우 false가 된다.
    // 배열의 요소가 모두 같은지 비교
    let isAllSame = prevArr.every((v, i) => v === curArr[i]);
    if (isAllSame) {
      break;
    }

    x++;

    // 현재 배열을 이전 배열에 저장
    prevArr = curArr;
  }

  return x;
}

// function solution(arr) {
//   var answer = 0;
//   let before = [-1];

//   while (!arr.every((e, idx) => e == before[idx])) {
//     before = [...arr];

//     arr = arr.map((e) => {
//       if ((e >= 50) & (e % 2 == 0)) return e / 2;
//       if ((e < 50) & (e % 2 != 0)) return e * 2 + 1;
//       return e;
//     });
//     answer++;
//   }
//   return answer - 1;
// }

let result = solution([1, 2, 3, 100, 99, 98]);
console.log(result);
