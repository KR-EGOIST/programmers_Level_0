// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

function solution(picture, k) {
  let answer = [];
  picture.forEach((v) => {
    const repeat = [...v].map((val) => val.repeat(k)).join('');
    for (let i = 0; i < k; i++) {
      answer.push(repeat);
    }
  });
  return answer;
}

let result = solution(
  [
    '.xx...xx.',
    'x..x.x..x',
    'x...x...x',
    '.x.....x.',
    '..x...x..',
    '...x.x...',
    '....x....',
  ],
  2
);
console.log(result);
