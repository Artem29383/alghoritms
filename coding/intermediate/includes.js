function includes(arr, n) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const index = Math.floor((left + right) / 2);
        const middle = arr[index];
        if (middle === n) return true;
        if (middle < n) {
            left = index + 1;
        }
        if (middle > n) {
            right = index - 1;
        }
    }

    return false;
}

console.log(includes([1, 3, 8, 10], 8)) // true
console.log(includes([1, 3, 8, 8, 15], 15)) // true
console.log(includes([1, 3, 8, 10, 15], 9)) // false