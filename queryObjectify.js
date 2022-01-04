const inData = "user.name.firstname=Bob";

const queryObjectify = (string) => {
  const data = {};
  let fieldQuery = '';
  let objectPaste = {};

  [...string].forEach((letter, index) => {
    if (letter === '.') {
      objectPaste[fieldQuery] = fieldQuery;
      fieldQuery = '';
    } else if (letter === '=') {
      objectPaste[fieldQuery] = fieldQuery;
      fieldQuery = '';
    } else if (letter === '&' || index === string.length - 1) {
      if (index === string.length - 1) {
        fieldQuery+=letter;
      }
      const value = decodeURI(fieldQuery);
      fieldQuery = '';
      assign(data, Object.keys(objectPaste), value);
      objectPaste = {};
    } else {
      fieldQuery+=letter;
    }
  })

  return data;
}

function assign(obj, keyPath, value) {
  const lastKey = keyPath[keyPath.length - 1];
  for (let key of keyPath) {
    if (lastKey === key) break;
    if (!key[obj]) {
      obj[key] = {};
    }
    obj = obj[key];
  }

  obj[lastKey] = value;
}

// function assign(obj, keyPath, value) {
//   lastKeyIndex = keyPath.length-1;
//   for (var i = 0; i < lastKeyIndex; ++ i) {
//     key = keyPath[i];
//     console.info('key', key);
//     if (!(key in obj)){
//       obj[key] = {}
//     }
//     obj = obj[key];
//   }
//   obj[keyPath[lastKeyIndex]] = value;
// }

console.info(queryObjectify(inData));
