function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}

// const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));

let result = solution([4, 2, 6, 1, 7, 6], 2);
console.log(result);
