function solution(a, b) {
  if (a % 2 == 1 && b % 2 == 1) return a ** 2 + b ** 2;
  else if (a % 2 == 1 || b % 2 == 1) return 2 * (a + b);
  else return Math.abs(a - b); // abs 는 절댓값 구하는 메소드
}

let result = solution(3, 5);
console.log(result);
