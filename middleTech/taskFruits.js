const words = ['grape', 'banana', 'banana', "grape", "banana", "orange", "banana"];

// [banana, grape, orange]

const sortArray = array => {
  const object = (array.reduce((acc, item) => {
    acc[item] = !acc[item] ? 1 : acc[item] += 1;
    return acc;
  }, {}))

  return Object.keys(object).sort((a, b) => object[b] - object[a]);
}

console.info(sortArray(words));
