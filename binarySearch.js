function binarySearch(list, value) {
  let leftBorder = 0;
  let rightBorder = list.length - 1;
  let middle;
  let guess;

  while (leftBorder <= rightBorder) {
    middle = Math.floor((leftBorder + rightBorder) / 2);
    guess = list[middle];

    if (guess === value) return middle;
    if (guess < value) {
      leftBorder = middle + 1;
    }
    if (list[middle] > value) {
      rightBorder = middle - 1
    }
  }


  return -1;
}

console.log(binarySearch([1, 4, 66, 88, 90, 100, 105, 110, 234, 555, 4445, 9999], 234))
// console.log(3/2);