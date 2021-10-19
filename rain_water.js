const input1 = [0, 1, 0, 2, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 1
const input2 = [4, 2, 0, 3, 2, 5]; //9 2 4 1 2

// const trap = (height) => {
//   let leftMaxHeight = 0;
//   let rightMaxHeight = 0;
//
//   return height.reduce((acc, elem, index) => {
//     if (index === 0 || index === height.length - 1) return acc;
//     leftMaxHeight = Math.max(...height.slice(0, index));
//     rightMaxHeight = Math.max(...height.slice(index, height.length));
//     acc = acc + (Math.min(leftMaxHeight, rightMaxHeight) - elem > 0 ? Math.min(leftMaxHeight, rightMaxHeight) - elem : 0);
//     return acc;
//   }, 0)
// }

const trap = height => {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];

  return height.reduce((acc, elem, index) => {
    if (index === 0 || index === height.length - 1) return acc;

    if (maxLeft < maxRight || maxRight === maxLeft) {
      maxLeft=height[left++]
      acc = acc + (maxLeft - elem > 0 ? maxLeft - elem : 0)
    }
    if (maxLeft > maxRight) {
      maxRight=height[right--];
      acc = acc + (maxRight - elem > 0 ? maxRight - elem : 0)
    }
    return acc;
  })
}

console.info(trap(input1));
console.info(trap(input2));

//           _
// _         _
// _     _   _
// _ _   _ _ _
// _ _   _ _ _
