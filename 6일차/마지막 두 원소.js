function solution(num_list) {
  if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
    num_list[num_list.length] =
      num_list[num_list.length - 1] - num_list[num_list.length - 2];
  } else {
    num_list[num_list.length] = num_list[num_list.length - 1] * 2;
  }
  return num_list;
}

let result = solution([2, 1, 6]);
console.log(result);
