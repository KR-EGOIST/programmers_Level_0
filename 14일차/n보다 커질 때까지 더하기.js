function solution(numbers, n) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > n) {
      return sum;
    }
  }
}

// function solution(numbers, n) {
//   return numbers.reduce((a, c) => (a <= n ? a + c : a));
// }

let result = solution([34, 5, 71, 29, 100, 34], 123);
console.log(result);
