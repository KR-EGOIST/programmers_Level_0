function solution(myString) {
  let answer = [...myString].map((v) => {
    if (v < 'l') {
      return v.replace(v, 'l');
    } else return v;
  });
  return answer.join('');
}

// const solution = (myString) => myString.replace(/[a-k]/g, 'l');

let result = solution('abcdevwxyz');
console.log(result);
