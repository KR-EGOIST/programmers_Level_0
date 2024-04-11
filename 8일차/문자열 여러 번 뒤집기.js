function solution(my_string, queries) {
  queries.forEach(([s, e]) => {
    // 첫번째 값 start , 두번째 값 end
    const copyArr = [...my_string]; // 문자열 구조분해
    const slicedText = copyArr.slice(s, e + 1); // 문자열 일부분 저장
    const reversedText = slicedText.reverse().join(''); // 저장한 문자열 뒤집고 합치기
    copyArr.splice(s, e - s + 1, reversedText); // 뒤집은 문자열로 변경
    my_string = copyArr.join(''); // 구조분해된 문자열 합치기
  });
  return my_string;
}

let result = solution('rermgorpsam', [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);
console.log(result);
