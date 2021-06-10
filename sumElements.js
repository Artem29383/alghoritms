let arr = [4, 5, 7, 8, [5, 7, 9, [3, 5, 7]]]

const sumElements = arr => {
  return arr.reduce((sum, array) => {
    return Array.isArray(array) ? sum += sumElements(array) : sum += array;
  }, 0)
}

console.info(sumElements(arr))