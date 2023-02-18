//uniq - Takes an array of numbers, and returns the unique numbers.
// Can you do it in O(N) time?

function uniq(array) {
    const map = {};
    const result = [];

    array.forEach(n => {
        if (!map[n]) {
            map[n] = 1;
            result.push(n);
        }
    })

    return result
}

console.log(uniq([])) // []
console.log(uniq([1, 4, 2, 2, 3, 4, 8])) // [1, 4, 2, 3, 8]