let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise((resolve) => setTimeout(() => resolve('c'), 100))
//
//
// async function reduceAsync(array, func, acc) {
//     const promises = array.reduce((initial, fn) => {
//         return func(initial, new Promise(resolve => resolve(fn())));
//     }, acc)
//     return Promise.all(promises);
// }

async function reduceAsync(array, func, acc) {
   for (const fn of array) {
       acc = func(acc, await fn())
   }
   return acc;
}


// reduceAsync([a, b, c], (acc, value) => [...acc, value], []).then(r => console.log(r));
// ['a', 'b', 'c']
reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']).then(r => console.log(r))
// ['d', 'a', 'c', 'b']

// let a = () => Promise.resolve('a')
// let b = () => Promise.resolve('b')
// let c = () => Promise.resolve('c')
//
// async function seq(array) {
//     return await reduceAsync(array, (acc, value) => [...acc, value], []);
// }
//
// seq([a, b, c]).then(r => console.log(r)) // ['a', 'b', 'c']
// seq([a, c, b]).then(r => console.log(r)) // ['a', 'c', 'b']