function solution(names) {
  let answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
}

// const solution = (names) => names.filter((_, i) => !(i % 5));

let result = solution([
  'nami',
  'ahri',
  'jayce',
  'garen',
  'ivern',
  'vex',
  'jinx',
]);
console.log(result);
