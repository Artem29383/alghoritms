const price1 = [0, 7, 0, 1, 5, 3, 6, 4, 0];
const price2 = [7, 6, 4, 3, 1];

const maxProfit = (prices) => {
  const res = prices.reduce((acc, element) => {
    if (element < acc.min || acc.min === undefined) {
      [acc.min, acc.max] = [element, undefined]
    }
    if (acc.max < element || acc.max === undefined) {
      acc.max = element
    }
    return acc;
  }, { min: undefined, max: undefined })
  return res.max - res.min
}

console.info(maxProfit(price1));