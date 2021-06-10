const tr = {
  a: {
    a: 1,
    b: {
      a: 0,
      b: 1
    },
    c: 0
  },
  b: 0,
  c: 1
};

// function inverse(tree) {
//   const object = {};
//   const keys = Object.keys(tree);
//
//   keys.forEach((key) => {
//     if (typeof tree[key] === 'object') {
//       object[key] = inverse(tree[key]);
//     } else if (tree[key] === 0) {
//       object[key] = 1;
//     } else if (tree[key] === 1) {
//       object[key] = 0;
//     }
//   })
//
//   return object;
// }

// console.log(inverse(tr));

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 4},
        {value: 5},
      ]
    },
    {
      value: 3,
      children: [
        {value: 6},
        {value: 7},
      ]
    }
  ]
};

function sumTree(object) {
  let sum = object.value;

  if (Array.isArray(object.children)) {
    object.children.forEach(item => sum += sumTree(item));
  }

  return sum;
}

console.info(sumTree(tree))