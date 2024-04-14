function solution(date1, date2) {
  const d1 = date1.join('');
  const d2 = date2.join('');
  return +d1 < +d2 ? 1 : 0;
}

// const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

let result = solution([2021, 12, 28], [2021, 12, 29]);
console.log(result);
