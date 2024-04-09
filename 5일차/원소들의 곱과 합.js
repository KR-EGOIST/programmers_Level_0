function solution(num_list) {
  let mul = num_list[0];
  let sum_pow = num_list[0];

  for (let i = 1; i < num_list.length; i++) {
    mul *= num_list[i];
    sum_pow += num_list[i];
  }

  sum_pow = sum_pow ** 2;

  if (mul < sum_pow) {
    return 1;
  } else {
    return 0;
  }
}

let result = solution([5, 7, 8, 3]);
console.log(result);
