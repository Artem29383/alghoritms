//№1

const string = 'abccba'
const string2 = 'abcba';
const string3 = 'abcbaa';


// const isPalindrome = str => {
//   const len = str.length - 1;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - i]) return false;
//   }
//
//   return true;
// }
//
// console.info(isPalindrome(string))
// console.info(isPalindrome(string2))
// console.info(isPalindrome(string3))

// №2
// const findShortWord = (str) => {
//   let shortWord = null;
//
//   str.split(' ').forEach(word => {
//     if (!shortWord || shortWord.length > word.length) {
//       shortWord = word
//     }
//   })
//
//   return shortWord;
// }

// const findShortWord = (str) => {
//   return str.split(' ').sort((a, b) => a.length - b.length)[0];
// }

// console.info(findShortWord('The smallest word in sentence'))
// console.info(findShortWord('Just test string'))

//№3 //rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// const rle = (str) => {
//   let prev = null;
//   return str.split('').reduce((acc, letter, index) => {
//     if (!prev || prev[prev.length - 1] === letter) {
//       prev = !prev ? letter : prev + letter;
//       if (index !== str.length - 1) {
//         return acc;
//       }
//     }
//
//     acc += `${prev[0]}${prev.length === 1 ? '' : prev.length}`
//     prev = letter;
//     return acc;
//   }, '')
// }
//
// console.info(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))

//#5 find min and max elements
//
// const getMinMax = (arr) => {
//   const result = arr.reduce((acc, elem) => {
//     if (acc.max < elem) {
//       acc.max = elem;
//     }
//     if (acc.min > elem) {
//       acc.min = elem;
//     }
//     return acc;
//   }, {
//     max: arr[0],
//     min: arr[0],
//   });
//
//   return [result.min, result.max];
// }
//
// console.info(getMinMax([2, 9, 10, 25, 47, 4, 7]));
// console.info(getMinMax([2, 1]));
// console.info(getMinMax([1]));

//№6 query construct
/*

const inData = "user.name.firstname=Bob&user.name.lastname=Jade&service.controller.open=true&service.controller.port=3000&service.sdk.exist=true";

const assign = (obj, keys, value) => {
  const lastKey = keys[keys.length - 1];
  for (let key of keys) {
    if (!obj[key]) {
      obj[key] = {}
    }

    if (key === lastKey) {
      obj[key] = value;
    }

    obj = obj[key];
  }
}

const queryObjectify = (query) => {
  const result = {};
  const string = query.split('&');

  string.forEach(substr => {
    const subFields = substr.split('.');
    const lastField = subFields[subFields.length - 1].split('=');
    assign(result, [...subFields.slice(0, subFields.length - 1), lastField[0]], lastField[1]);
  })

  return result;
}

console.info(queryObjectify(inData));
*/

// //№7 duplicate create items
//
// const copySymbol = (symbol, count) => {
//   let str = '';
//
//   for (let i = count; i > 0; i--) {
//     str += symbol;
//   }
//
//   return str;
// }
//
// const accum = (str) => str.split('')
//   .reduce((acc, letter, index) => acc +=
//       (`${index ? '-' : ''}${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`),
//     ''
//   );
//
// console.info(accum('abcd'));
// console.info(accum('cwAt'));

/*
//№8 remove duplicates

const uniteUnique = (...rest) => ([...new Set(rest.flat())]);

console.info(uniteUnique([1], [2], [3,2,2], [4, 1, 1, 2]));*/

// //№9
//
// function memo(callback) {
//   const cache = {};
//
//   return function(param) {
//     const cacheValue = cache[param];
//
//     if (cacheValue) {
//       console.info('cache')
//       return cacheValue;
//     } else {
//       console.info('new')
//       cache[param] = callback(param);
//       return cache[param];
//     }
//   }
// }
//
// const toUpper = (str = '') => str.toUpperCase();
//
// const toUpperMemo = memo(toUpper);
//
// toUpperMemo('artem');
// toUpperMemo('artem');


// //#10 flatten FN
// const array = [1, [1, 2, [3, 4]], [2, 4]];
//
// const flatten = (array) => array.reduce((acc, item) => Array.isArray(item) ? [...acc, ...flatten(item)] : [...acc, item], []);
const flatten = (array) => array.reduce((acc, item) => Array.isArray(item) ? acc.concat(flatten(item)) : [...acc, item], []);
//
// console.info(flatten(array));


