function solution(n, slicer, num_list) {
  let answer = [];
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      answer = num_list.slice(0, b + 1);
      break;
    case 2:
      answer = num_list.slice(a);
      break;
    case 3:
      answer = num_list.slice(a, b + 1);
      break;
    case 4:
      // num_list 를 a 번 인덱스부터 b 번 인덱스까지 자르고, c 간격으로 필터링
      answer = num_list.slice(a, b + 1).filter((_, i) => i % c == 0);
      break;
  }
  return answer;
}

let result = solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
