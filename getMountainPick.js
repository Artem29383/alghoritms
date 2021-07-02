const arr1 = [1, 2, 3, 4,7, 3, 2, 1];


const getMountainPick = (array) => {
  let start = 0
  let end = array.length - 1;
  let middle;


  while (start < end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] < array[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return start;
}

console.log(getMountainPick(arr1));