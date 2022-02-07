// function checkBrackets(string) {
//   const brackets = {
//     open: 0,
//   }
//
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '(') {
//       brackets.open = brackets.open + 1;
//     }
//     if (string[i] === ')') {
//       brackets.open = brackets.open - 1;
//       if (brackets.open < 0) {
//         return false;
//       }
//     }
//   }
//
//   return brackets.open === 0;
// }

// function checkBrackets(string) {
//   const brackets = []
//   const mirrors = {
//     '(':')',
//     '[':']',
//     '{':'}',
//   }
//
//   for (let i = 0; i < string.length; i++) {
//     const bracket = string[i]
//     if (['(', '{', '['].includes(bracket)) {
//       brackets.push(bracket)
//     } else {
//       const response = brackets.pop();
//       if (bracket !== mirrors[response]) {
//         return false;
//       }
//     }
//   }
//
//   return brackets.length === 0;
// }

function checkBrackets(string) {
  const acc = []
  const mirrors = {
    '{': '}',
    '[': ']',
    '(': ')',
  }

  const array = string.split('');

  for (let i = 0; i < array.length; i++) {
    const brace = array[i];
    if (mirrors[brace]) {
      acc.push(brace);
    } else {
      const removeItem = acc.pop();
      if (brace !== mirrors[removeItem]) return false;
    }
  }

  return true;
}

console.log(checkBrackets('[{((({}(()))))}]'))
