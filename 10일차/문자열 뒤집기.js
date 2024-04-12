function solution(my_string, s, e) {
  const sliceStr = my_string.slice(s, e + 1);
  const reverseStr = [...sliceStr].reverse().join('');
  const splitMyString = [...my_string];
  splitMyString.splice(s, e - s + 1, reverseStr);
  return splitMyString.join('');
}

let result = solution('Progra21Sremm3', 6, 12);
console.log(result);
