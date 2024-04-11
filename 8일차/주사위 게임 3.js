function solution(a, b, c, d) {
  let arr = [a, b, c, d];
  const p = Math.max(a, b, c, d); // 주사위 숫자 중 가장 큰 값
  const q = Math.min(a, b, c, d); // 주사위 숫자 중 가장 작은 값
  let p_count = 0; // 큰 값의 갯수
  let q_count = 0; // 작은 값의 갯수

  // 나온 빈도 수 구하기
  arr.forEach((v) => {
    if (v == p) p_count++;
    if (v == q) q_count++;
  });

  // 모두 같은 값일 경우
  if (p_count == 4) {
    return 1111 * p;
  }

  // 같은 값이 3개인 경우
  if (p_count == 3) {
    return (10 * p + q) ** 2;
  }
  if (q_count == 3) {
    return (10 * q + p) ** 2;
  }

  // 같은 값이 서로 2개인 경우
  if (p_count == 2 && q_count == 2) {
    return (p + q) * Math.abs(p - q);
  }

  // 같은 값이 2개이면서 나머지 둘이 서로 다른 값인 경우
  if (a == b) {
    return c * d;
  } else if (a == c) {
    return b * d;
  } else if (a == d) {
    return b * c;
  } else if (b == c) {
    return a * d;
  } else if (b == d) {
    return a * c;
  } else if (c == d) {
    return a * b;
  }

  // 전부 다른 값인 경우
  return q;
}

let result = solution(4, 2, 2, 2);
console.log(result);
