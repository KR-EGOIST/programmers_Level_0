function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

let result = solution('abc', 'aabcc');
console.log(result);
