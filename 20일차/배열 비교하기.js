function solution(arr1, arr2) {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  if (arr1Len != arr2Len) {
    return arr1Len > arr2Len ? 1 : -1;
  }

  const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
  const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);
  if (arr1Sum == arr2Sum) {
    return 0;
  }
  return arr1Sum > arr2Sum ? 1 : -1;
}

// const solution = (arr1, arr2) => {
//   return arr1.length !== arr2.length
//     ? compare(arr1.length, arr2.length)
//     : compare(arr1, arr2, 'reduce');
// };

// const compare = (a, b, option) => {
//   if (option === 'reduce') {
//     a = a.reduce((acc, cur) => acc + cur);
//     b = b.reduce((acc, cur) => acc + cur);
//   }
//   return a > b ? 1 : a < b ? -1 : 0;
// };

let result = solution([49, 13], [70, 11, 2]);
console.log(result);
