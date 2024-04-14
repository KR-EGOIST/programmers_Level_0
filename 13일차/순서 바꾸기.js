function solution(num_list, n) {
  let temp = num_list.splice(n, num_list.length - n);
  temp.forEach((v, i) => {
    num_list.splice(i, 0, v);
  });
  return num_list;
}

// function solution(num_list, n) {
//   num_list.unshift(...num_list.splice(n));
//   return num_list;
// }

let result = solution([2, 1, 6], 1);
console.log(result);
