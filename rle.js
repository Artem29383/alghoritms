//rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'


function letterCount(string) {
  return Object.entries(string.split('').reduce((acc, letter) => {
    acc[letter] = acc[letter] === undefined ? 1 : acc[letter] + 1;
    return acc;
  }, {})).flat().join('')
}

// console.info(letterCount('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))

// function rle(string) {
//   let currentLetter = string[0];
//   let count = 0;
//   const array = string.split('').reduce((acc, letter) => {
//     if (currentLetter === letter) {
//       count+=1;
//     } else {
//       acc.push(currentLetter);
//       if (count > 1) {
//         acc.push(count);
//       }
//       count = 1;
//     }
//     currentLetter = letter;
//     return acc;
//   }, []);
//   array.push(currentLetter)
//   if (count > 1) {
//     array.push(count);
//   }
//   return array.join('');
// }

function rle(string) {
  const array = [];
  let count = 0;
  let prev = string[0]

  string.split('').forEach((value, index) => {
    if (value === prev) {
      count +=1;
      if (index === string.length - 1) {
        array.push(prev);
        if (count > 1) {
          array.push(count);
        }
      }
    } else {
      array.push(prev);
      if (count > 1) {
        array.push(count);
      }
      prev = value;
      count = 1;
    }
  })

  return array.join('');
}

console.info(console.info(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')))