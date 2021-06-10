function targetSum(array, target) {
  const result = []
  let possibleFirst = null;

  for (let i =0; i < array.length - 1; i++) {
    possibleFirst = array[i];
    let possibleTwo = target - possibleFirst;

    const index = array.indexOf(possibleTwo);
    if (index !== -1 && i !== index) {
      result.push(possibleFirst, possibleTwo);
      break;
    }
  }
  return result
}


console.info(targetSum([3, 5, -4, 5, 8, 11, 1, 6, -1], 10));

// function twoNumberSum(array, targetSum) {
//   const possible = {};
//
//     for (let i = 0; i < array.length - 1; i++) {
//       const diff = targetSum - array[i];
//
//       if (possible[diff]) {
//         return [diff, array[i]];
//       } else {
//         possible[array[i]] = true;
//       }
//     }
//
//     return []
// }
//
// console.info(twoNumberSum([3, 5, -4, 8, 11, 5, 1, -1, 6], 10));
