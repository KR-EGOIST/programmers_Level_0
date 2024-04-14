function solution(order) {
  let price = 0;

  for (const coffee of order) {
    coffee.includes('americano') || coffee.includes('anything')
      ? (price += 4500)
      : (price += 5000);
  }
  return price;
}


// const solution = (order) =>
//   order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0);


// function solution(order) {
//   const obj = {
//     americano: 4500,
//     cafelatte: 5000,
//     anything: 4500,
//   };

//   return order.reduce((acc, cur) => {
//     cur = cur.replace('ice', '');
//     cur = cur.replace('hot', '');
//     return acc + obj[cur];
//   }, 0);
// }

let result = solution([
  'cafelatte',
  'americanoice',
  'hotcafelatte',
  'anything',
]);
console.log(result);
