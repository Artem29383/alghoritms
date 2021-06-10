// // array with random values
//
// function random(min, max) {
//   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
// }
//
// function randomArr() {
//   const obj = {};
//   for (let i =0; i<10; i++) {
//     const randomValue = random(0, 200);
//     console.log(randomValue)
//     if (obj[randomValue]) {
//       i--;
//     } else {
//       obj[`#${randomValue}`] = randomValue;
//     }
//   }
//   // console.info(obj)
//   return Object.values(obj);
// }
//
// console.log(randomArr());

const arr = [1, 2, 3, 4, 5, 0, 0, 0, 0, 0];

// function unk(array) {
//   const middle = array.length / 2;
//   for (let i = 0; i<middle;i++) {
//     array[middle + i] = array[i];
//   }
//
//   return array.sort((a, b) => a-b);
// }

function unk(array) {
  let j = (array.length / 2) - 1;

  for (let i =array.length - 1; i > 0; i-=2) {
    array[i] = array[j];
    array[i - 1] = array[j];
    j--;
  }

  return array;
}

console.log(unk(arr));