function oddSort(array) {
  array.forEach((number, index) => {
    if (number % 2 === 1) {
      let sortItem = number;

      for (let i = 0; i < index; i++) {
        if (array[i] % 2 === 1) {
          if (sortItem < array[i]) {
            const temp = array[i];
            array[i] = sortItem;
            sortItem = temp;
          }
        }
      }
      array[index] = sortItem
    }
  })
  return array;
}

console.info(oddSort([7, 3, 4, 9, 5, 2, 17, 3, 3, 3, 3, 1]))