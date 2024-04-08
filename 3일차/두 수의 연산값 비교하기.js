function solution(a, b) {
  let num = 2 * a * b;
  return Math.max(Number(`${a}${b}`), num);
  // return Math.max( +(a.toString()+b.toString()),2*a*b)
}

let result = solution(91, 2);
console.log(result);
