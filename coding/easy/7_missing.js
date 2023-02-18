// function missing(arr) {
//     arr.sort((a, b) => a - b)
//
//     for (let i = 0; i<arr.length; i++) {
//         if (i === 0 && arr[i] > 1) {
//             return 1;
//         }
//         if (arr[i+1] && arr[i] + 1 !== arr[i + 1]) {
//             return arr[i] + 1;
//         }
//     }
// }

//Это формула для вычисления ожидаемой суммы арифметической прогрессии. Она используется для вычисления суммы первых n чисел арифметической прогрессии, где max - это последнее число в прогрессии.
//
// Формула: (max * (max + 1)) / 2
//
// Например, если мы хотим найти сумму первых 10 чисел арифметической прогрессии, где max = 10, то сумма будет равна (10 * (10 + 1)) / 2 = 55.

function missing(arr) {
    if (!arr.length) {
        return undefined;
    }

    let max = Math.max(...arr);
    let expectedSum = max * (max + 1) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);

    if (expectedSum === actualSum) {
        return undefined;
    } else {
        return expectedSum - actualSum;
    }
}

console.log(missing([])) // undefined
console.log(missing([1, 4, 3])) // 2
console.log(missing([2, 3, 4])) // 1
console.log(missing([5, 1, 4, 2])) // 3
console.log(missing([1, 2, 3, 4])) // undefined