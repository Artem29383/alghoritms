function isSorted(arr) {
    for (let i = 0; i<arr.length; i++) {
        const [elem, nextElem] = [arr[i], arr[i+1]];
        if (nextElem && elem > nextElem) return false
    }
    return true;
}

console.log(isSorted([])) // true
console.log(isSorted([-Infinity, -5, 0, 3, 9])) // true
console.log(isSorted([3, 9, -3, 10])) // false
console.log(isSorted([3, 9, 13, 15, 17])) // true
