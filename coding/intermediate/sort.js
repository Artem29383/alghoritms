// function sort(arr) {
//     for (let i = 0; i<arr.length;i++) {
//         for (let j = i; j<arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }
//
//     return arr
// }

function sort(array) {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(sort(left), sort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}


console.log(sort([])) // []
console.log(sort([-4, 1, Infinity, 3, 3, 0])) // [-4, 0, 1, 3, 3, Infinity]