function solution(my_string) {
  let answer = my_string.split(' ');
  return answer.filter((v) => v != '');
}

// function solution(my_string) {
//   return my_string.trim().split(/ +/);
// }

// const solution = (my_string) => my_string.match(/[^\s]+/g);

let result = solution('i love you');
console.log(result);
