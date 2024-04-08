const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  // 문자열을 ' ' (공백)을 기준으로 문자로 나눠서 배열에 저장
  input = line.split(' ');
}).on('close', function () {
  // ${변수} 로 변수의 값을 출력
  console.log(`a = ${input[0]}`);
  console.log(`b = ${input[1]}`);
});
