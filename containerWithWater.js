const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; //49
const input2 = [1, 1]; //1
const input3 = [4, 3, 2, 1, 4]; //16
const input4 = [1, 2, 1]; //2

const getMaxAndIndex = (array) => {
  let max = 0;
  let index = null;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]
      index = i;
    }
  }
  return { max, index };
}


// const maxArea = (height) => {
//   const { max, index } = getMaxAndIndex(height);
//   console.info('INDEX', index)
//   let maxArea = 0;
//
//   for (let i = index; i <= height.length; i++) {
//     const currentIterationArea = height[i] * (i - index);
//     if (maxArea < currentIterationArea) {
//       maxArea = currentIterationArea
//     }
//   }
//
//   return [max, index, maxArea];
// }


const maxArea = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentVolume = Math.min(height[left], height[right]) * (right - left)
    if (maxArea < currentVolume) {
      maxArea = currentVolume;
    }

    if (height[left] < height[right]) {
      left += 1;
    }
    else {
      right -= 1;
    }
  }

  return maxArea;
}


console.info(maxArea(input1));
console.info(maxArea(input2));
console.info(maxArea(input3));
console.info(maxArea(input4));
