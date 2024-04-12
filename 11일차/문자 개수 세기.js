// 배열 초기화 방식

// fill 방식
// let arr1 = new Array(5).fill([]);

// from 방식
// let arr2 = Array.from({ length: 5 }, () => []);

// str.charCodeAt(i) - str 문자열의 i 번째 문자의 아스키코드 값
function solution(my_string) {
  let answer = new Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    let ascii = my_string.charCodeAt(i);

    if (ascii >= 97) {
      answer[ascii - 71]++;
    } else {
      answer[ascii - 65]++;
    }
  }
  return answer;
}

let result = solution('Programmers');
console.log(result);
