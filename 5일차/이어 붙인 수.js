function solution(num_list) {
  let num1 = '';
  let num2 = '';

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 1) num1 += num_list[i];
    else num2 += num_list[i];
  }

  return Number(num1) + Number(num2);
}

let result = solution([3, 4, 5, 2, 1]);
console.log(result);
