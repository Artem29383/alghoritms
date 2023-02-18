// //assignDeep - Like Object.assign, but merges objects deeply.
// // For the sake of simplicity, you can assume that objects can contain
// // only numbers and other objects (and not arrays, functions, etc.).
//
// function isObject(a) {
//     return typeof a === 'object' && a !== null
// }

// function assignDeep(target, source) {
//         Object.keys(source).forEach(key => {
//             if (isObject(source[key])) {
//                 if (!isObject(target[key])) {
//                     target[key] = {};
//                 }
//                 assignDeep(target[key], source[key]);
//             } else {
//                 target[key] = source[key];
//             }
//         })
//
//     return target;
// }
//
// // console.log(assignDeep({a: 1}, {})) // { a: 1 }
// // console.log(assignDeep({a: 1}, {a: 2})) // { a: 2 }
// // console.log(assignDeep({a: {o: 3}}, {a: {b: 2}})) // { a: { b: 2 } }
// console.log(assignDeep({a: {b: {c: 1}}}, {a: {b: {d: 2}}, e: 3}))
// // { a: { b: { c: 1, d: 2 }}, e: 3 }












function assignDeep(obj, source) {
    Object.keys(source).forEach(key => {
        if (typeof source[key] === 'object') {
            if (typeof obj[key] !== 'object') {
                obj[key] = {}
            }
            assignDeep(obj[key], source[key]);
        } else {
            obj[key] = source[key];
        }
    })

    return obj;
}

console.log(assignDeep({a: 1}, {})) // { a: 1 }
console.log(assignDeep({a: 1}, {a: 2})) // { a: 2 }
console.log(assignDeep({a: 1}, {a: {b: 2}})) // { a: { b: 2 } }
console.log(assignDeep({a: {o: 3}}, {a: {b: 2}})) // { a: { b: 2 } }
console.log(assignDeep({a: {b: {c: 1}}}, {a: {b: {d: 2}}, e: 3}))
// { a: { b: { c: 1, d: 2 }}, e: 3 }





















