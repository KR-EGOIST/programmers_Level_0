function solution(arr) {
  const rowLen = arr.length;
  const colLen = arr[0].length;

  if (rowLen > colLen) {
    const temp = Array(rowLen - colLen).fill(0);
    return arr.map((v) => [...v, ...temp]);
  }

  if (rowLen < colLen) {
    for (let i = 0; i < colLen - rowLen; i++) {
      const temp = Array(colLen).fill(0);
      arr.push(temp);
    }
  }
  return arr;
}

let result = solution([
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
]);
console.log(result);
