function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    let temp = `${i}`;
    // every 함수
    // value 값에 대한 조건이 전부 참이여야만 true 를 반환한다.
    if ([...temp].every((v) => v == '5' || v == '0')) {
      answer.push(i);
    } else {
      continue;
    }
  }
  return answer.length ? answer : [-1];
}

let result = solution(10, 20);
console.log(result);

// function solution(l, r) {
//     const result = Array.from({length:r-l+1}, (_,i)=>i+l).filter(n=>!/[^05]/.test(n));
//     return result.length ? result : [-1];
// }

// 숫자 5로 현혹시켰지만 사실 이건 이진수 문제임.
// function* gen50() {
//     let i = 1;

//     while(true) {
//         yield Number(Number(i).toString(2)) * 5;
//         i++;
//     }
// }
// function solution(l, r) {
//     const n = gen50();
//     let a = 0;
//     const arr = [];

//     while(a < l) { a = n.next().value; }
//     while(a <= r) { arr.push(a); a = n.next().value; }

//     return arr.length ? arr : [-1];
// }
