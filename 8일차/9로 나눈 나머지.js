function solution(number) {
  let sum = 0;
  [...number].forEach((v) => {
    sum += Number(v);
  });

  return sum % 9;
}

let result = solution('78720646226947352489');
console.log(result);
