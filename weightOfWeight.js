// function orderWeight(str) {
//     const array = str.split(' ');
//     const table = {};
//
//     array.forEach(weight => {
//         table[weight] = weight.split('').reduce((sum, letter) => sum = sum + +letter , 0);
//     })
//
//     const sortArrayByWeight = array.sort((a, b) => table[a] - table[b]);
//
//     for (let i = 0; i<sortArrayByWeight.length; i++) {
//         for (let j = 0; j < sortArrayByWeight.length; j++) {
//             if (table[sortArrayByWeight[i]] === table[sortArrayByWeight[j]]) {
//                 if (sortArrayByWeight[i] < sortArrayByWeight[j]) {
//                     const temp = sortArrayByWeight[i]
//                     sortArrayByWeight[i] = sortArrayByWeight[j]
//                     sortArrayByWeight[j] = temp;
//                 }
//             }
//         }
//     }
//
//     return sortArrayByWeight.join(' ');
// }

function orderWeight(str) {
    const array = str.split(' ');
    const table = array.reduce((acc, weight) => {
        acc[weight] = weight.split('').reduce((sum, letter) => sum + +letter, 0);
        return acc;
    }, {});

    const sortArrayByWeight = array.sort((a, b) => {
        if (table[a] === table[b]) {
            return a.localeCompare(b);
        }
        return table[a] - table[b];
    });

    return sortArrayByWeight.join(' ');
}


// console.log(orderWeight('56 65 74 100 99 68 86 180 90'))
// console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')) //"11 11 2000 10003 22 123 1234000 44444444 9999"

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

    // "100 180 90 56 65 74 68 86 99"