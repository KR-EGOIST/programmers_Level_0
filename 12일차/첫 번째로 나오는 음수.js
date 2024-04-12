// forEach 함수를 사용할 때는 순회 도중에 리턴하는 게 불가하다고 한다.
// return후 forEach문을 빠져나오지 않고 마치 'continue'처럼 동작하는 것.
// 그렇기 때문에 위의 문제의 경우 forEach 문이 아니라 반복문을 사용해서 푸는 게 더 옳다.

function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i;
    }
  }
  return -1;
}

// function solution(num_list) {
//   return num_list.findIndex((num) => num < 0);
// }

let result = solution([12, 4, 15, 46, 38, -2, 15]);
console.log(result);
