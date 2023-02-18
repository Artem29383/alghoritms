function indexOf(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf([1, 2, 3], 1)); // 0
console.log(indexOf([1, 2, 3], 4)); // -1