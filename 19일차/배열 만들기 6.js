function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length == 0) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] == arr[i]) {
      stk.pop();
    } else if (stk[stk.length - 1] != arr[i]) {
      stk.push(arr[i]);
    }
  }

  return stk.length == 0 ? [-1] : stk;
}

let result = solution([0, 1, 1, 1, 0]);
console.log(result);
