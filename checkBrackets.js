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

function checkBrackets(string) {
  const brackets = []
  const mirrors = {
    '(':')',
    '[':']',
    '{':'}',
  }

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i]
    if (['(', '{', '['].includes(bracket)) {
      brackets.push(bracket)
    } else {
      const response = brackets.pop();
      if (bracket !== mirrors[response]) {
        return false;
      }
    }
  }

  return brackets.length === 0;
}

console.log(checkBrackets('[{((({}(()))))}]'))