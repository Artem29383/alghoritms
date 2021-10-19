const input1 = 'leetcode' //0
// const input2 = 'loveleetcode' // 2
// const input3 = 'aabb' // -1
//
// // const firstUniqChar = (string) => {
// //   return string.split('').reduce((acc, char, index) => {
// //     acc[char] = acc[char] ? acc[char] + 1 : 1;
// //     if (char === acc['result'].name && acc[char] > 1) {
// //       acc['result'] = {
// //         name: '',
// //         index: -1,
// //     }
// //     } else if (acc[char] === 1 && acc['result'].index === -1) {
// //       acc['result'] = {
// //         name: char,
// //         index,
// //       };
// //     }
// //     return acc;
// //   }, {
// //     result: {
// //       name: '',
// //       index: -1,
// //     }
// //   }).result
// // }
//
const firstUniqChar = string => {
  const result =  Object.values(string.split('').reduce((acc, char, index) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    if (acc[char] === 1) {
      acc['result'][char] = index;
    } else {
      delete acc['result'][char]
    }
    return acc;
  }, { result: {} }).result)[0]
  return result !== undefined ? result : -1
}

console.log(firstUniqChar(input1))
// console.log(firstUniqChar(input2))
// console.log(firstUniqChar(input3))

// function add(a, b) {
//   if (b) {
//     return  a + b;
//   } else {
//     return function (c) {
//       return a + c;
//     }
//   }
// }
//
// console.info(add(2)(5));
// console.info(add(2, 5));
