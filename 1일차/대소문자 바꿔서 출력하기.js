const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    // charCodeAt 함수
    // 문자를 아스키코드 값으로 변환
    if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
      // toUpperCase 함수
      // 대문자로 변환
      arr[i] = arr[i].toUpperCase();
    } else {
      // toLowerCase 함수
      // 소문자로 변환
      arr[i] = arr[i].toLowerCase();
    }
  }

  str = arr.join('');
  console.log(str);
});
