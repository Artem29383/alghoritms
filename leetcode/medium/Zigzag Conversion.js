// function convert(str, numRows) {
//     if (numRows === 1) {
//         return str;
//     }
//     const table = {
//         rows: [],
//     };
//     let column = 0;
//     let row = 0;
//     const diviner = numRows - 1;
//
//     str.split('').forEach((symbol, index) => {
//         if (!table.rows[row]) {
//             table.rows[row] = '';
//         }
//         if (!table[column]) {
//             table[column] = {
//                 text: '',
//                 max: column % diviner === 0 ? numRows : 1,
//             };
//         }
//         if (table[column].text.length <= table[column].max) {
//             table[column].text+=symbol;
//             table.rows[row]+=symbol;
//             if (table[column].max !== 1 && table[column].text.length !== table[column].max) {
//                 row++;
//             }
//             if (table[column].text.length === table[column].max) {
//                 column++;
//                 row--;
//             }
//         }
//     })
//     return table.rows.join('');
// }

// function convert(str, numRows) {
//     if (numRows === 1) {
//         return str;
//     }
//
//     const rows = new Array(Math.min(str.length, numRows)).fill('');
//     let row = 0;
//     let step = 1;
//
//     str.split('').forEach(symbol => {
//         rows[row]+=symbol;
//         if (row === 0) {
//             step = 1;
//         }
//         if (row === numRows - 1) {
//             step = -1;
//         }
//         row+=step;
//     })
//
//     return rows.join('');
// }

// console.log(convert('PAYPALISHIRING', 3)); //PAHNAPLSIIGYIR
// console.log(convert('PAYPALISHIRING', 4)); //PINALSIGYAHRPI
// console.log(convert('A', 1)); //A

function transform(obj) {
    const result = [];
    const queue = [];

    const traverse = (obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push(key);
                if (typeof obj[key] === 'object') {
                    queue.push(obj[key]);
                }
            }
        }
    };

    traverse(obj);
    while (queue.length > 0) {
        traverse(queue.shift());
    }

    return result;
}

const obj = {
    a: 1,
    b: {
        d: 3,
        x: 6,
    },
    c: 4,
    r: {
        f: {
            j: 1,
        }
    }
};

console.log(transform(obj));
// Output: [ 'a', 'x', 'd', 'j', 'f', 'r', 'b', 'c' ]

// Output: [ 'a', 'x', 'd', 'j', 'f', 'r', 'b', 'c' ]
