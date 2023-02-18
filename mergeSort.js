function mergesorted(a, b) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }

    while (i < a.length) {
        result.push(a[i]);
        i++;
    }

    while (j < b.length) {
        result.push(b[j]);
        j++;
    }

    return result;
}

// console.log(mergesorted([], [])) // []);
// console.log(mergesorted([1], [])) // [1]);
// console.log(mergesorted([], [1])) // [1]);
// console.log(mergesorted([1], [1])) // [1, 1]);
// console.log(mergesorted([1, 2, 3], [4])) // [1, 2, 3, 4]);
// console.log(mergesorted([4], [1, 2, 3])) // [1, 2, 3, 4]);
// console.log(mergesorted([1, 1, 1], [2, 2, 2])) // [1, 1, 1, 2, 2, 2]);
// console.log(mergesorted([2, 2, 2], [1, 1, 1])) // [1, 1, 1, 2, 2, 2]);
// console.log(mergesorted([1, 2, 3], [1, 2, 3])) // [1, 1, 2, 2, 3, 3]);
// console.log(mergesorted([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]);
console.log(mergesorted([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]);
// console.log(mergesorted([2, 4, 6], [1, 3, 5])) // [1, 2, 3, 4, 5, 6]);