function solution(num_list) {
  let cnt = 0;

  for (num of num_list) {
    let number = num;

    while (!(number === 1)) {
      if (number % 2 === 0) {
        number = number / 2;
        cnt++;
      } else {
        number = (number - 1) / 2;
        cnt++;
      }
    }
  }
  return cnt;
}

let result = solution([12, 4, 15, 1, 14]);
console.log(result);
