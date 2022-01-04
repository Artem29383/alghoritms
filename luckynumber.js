let luckyNumber = 1123334444987;

const getLuckyMaxNumber = number => {
  const numbers = {};
  let max = 0;

  for (let n of number.toString()) {
    numbers[n] = numbers[n] + 1 || 1
    if (numbers[n] == n) {
      max = Math.max(+n, max);
    }
  }

  return max;
}

console.info(getLuckyMaxNumber(luckyNumber));
