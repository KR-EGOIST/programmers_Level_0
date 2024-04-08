const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('close', function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});

/*
  \' - 작은 따옴표 출력
  \" - 큰 따옴표 출력
  \\ - 역슬레시 출력
  \n - 다음 줄로 이동
  \t - 탭 만큼 이동
*/
