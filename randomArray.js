const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function random(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

// function shuffle(array) { // O (n^2)
//   const result = [];
//
//   while (array.length) {
//     const randomIndex = random(0, array.length - 1);
//     result.push(array[randomIndex]);
//     array.splice(randomIndex, 1);
//   }
//
//   return result;
// }

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = random(0, i);
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

console.info(shuffle(arr))