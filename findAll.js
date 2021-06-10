function range(start, end) {
  return [...Array(1 + end - start).keys()].map(v => start + v);
}


function findAll(sum, counts) {
  if (sum > counts * 9) return [];
  const array = range(1, sum);
  const numbers = [];



  return [];
}

console.info(findAll(10, 3));
// => [8, "118", "334"]