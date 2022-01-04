const inp1 = [1, 2, 1, 3, 4, 2];
const inp2 = [2, 2, 2, 3] // [2,2]
const inp3 = [4, 9, 5]
const inp4 = [9, 4, 9, 8, 4] // [4,9]

// function intersect(inp1, inp2) {
//   let arr1;
//   let arr2;
//   if (inp1.length >= inp2.length) {
//     arr1 = inp1;
//     arr2 = inp2
//   } else {
//     arr1 = inp2;
//     arr2 = inp1
//   }
//   const excludeIndex = {};
//   const result = [];
//
//   arr1.forEach(elem => {
//     for (let j = 0; j < arr2.length; j++) {
//       const element = arr2[j];
//       if (element === elem && !excludeIndex[j]) {
//         result.push(elem);
//         excludeIndex[j] = elem;
//         break;
//       }
//     }
//   })
//
//   return result;
// }

function intersect(arr1, arr2) {
  const MAP = new Map();
  const result = [];

  arr1.forEach(elem => {
    MAP.set(elem, !MAP.get(elem) ? 1 : MAP.get(elem) + 1);
  })

  arr2.forEach(elem => {
    if (MAP.has(elem)) {
      if (MAP.get(elem) > 0) {
        MAP.set(elem, MAP.get(elem) - 1);
        result.push(elem);
      }
    }
  })

  return result
}

console.log(intersect(inp1, inp2));
