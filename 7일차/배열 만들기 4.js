function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length;) {
    if (stk.length == 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }
  return stk;
}

let result = solution([1, 4, 2, 5, 3]);
console.log(result);
