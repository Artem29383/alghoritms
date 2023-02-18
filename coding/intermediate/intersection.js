function intersection(arr1, arr2) {
    const result = [];
    const set = new Set(arr1);

    arr2.forEach(element => {
        if (set.has(element)) {
            result.push(element);
            set.delete(element);
        }
    })

    return result;
}

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])) // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])) // []
console.log(intersection([1, 5, 4, 2, 5, 4], [7, 12, 5, 5])) // [5]