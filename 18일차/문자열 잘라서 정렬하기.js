function solution(myString) {
  return myString
    .split('x')
    .filter((v) => v)
    .sort();
}

let result = solution('axbxcxdx');
console.log(result);
