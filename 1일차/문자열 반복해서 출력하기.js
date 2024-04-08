const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str = input[0];
  n = Number(input[1]);

  // repeat 함수
  // str 문자열을 COUNT 만큼 반복하는 함수
  console.log(str.repeat(n));
});
