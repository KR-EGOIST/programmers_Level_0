function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

let result = solution('banana', 'ana');
console.log(result);
