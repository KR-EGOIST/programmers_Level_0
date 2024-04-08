const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  n = Number(input[0]);

  // n 나누기 2 의 나머지가 0 이면 짝수
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  }
  // n 나누기 2 의 나머지가 1 이면 홀수
  else {
    console.log(`${n} is odd`);
  }
});
