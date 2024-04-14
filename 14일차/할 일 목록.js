function solution(todo_list, finished) {
  var answer = [];
  for (let i = 0; i < finished.length; i++) {
    if (finished[i] == false) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
}

// function solution(todo_list, finished) {
//   var answer = [];
//   return todo_list.filter((e, i) => !finished[i]);
// }

let result = solution(
  ['problemsolving', 'practiceguitar', 'swim', 'studygraph'],
  [true, false, true, false]
);
console.log(result);
