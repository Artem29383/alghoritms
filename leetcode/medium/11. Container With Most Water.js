// function maxArea(array) {
//     let max = 0;
//
//     for (let i = 0; i<array.length; i++) {
//         let leftSide = array[i];
//         for (let j = i + 1; j < array.length; j++) {
//             let rightSide = array[j];
//             let step = j - i;
//             const minSide = Math.min(leftSide, rightSide);
//             const result = minSide * step;
//             if (result > max) {
//                 max = result;
//             }
//         }
//     }
//
//     return max;
// }

function maxArea(array) {
    let max = 0;
    let leftPoint = 0;
    let rightPoint = array.length - 1;

    while(leftPoint < rightPoint) {
        const leftSide = array[leftPoint];
        const rightSide = array[rightPoint];
        let step = rightPoint - leftPoint;
        const minSide = Math.min(leftSide, rightSide);
        const result = minSide * step;
        if (result > max) {
            max = result;
        }

        if (leftSide < rightSide) {
            leftPoint++;
        } else {
            rightPoint--;
        }
    }

    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));