function solution(num_list) {
  let oddSum = 0;
  let evenSum = 0;

  num_list.forEach((v, i) => {
    if (i % 2 == 0) {
      oddSum += v;
    } else {
      evenSum += v;
    }
  });

  return oddSum == evenSum ? oddSum : Math.max(oddSum, evenSum);
}

let result = solution([4, 2, 6, 1, 7, 6]);
console.log(result);
