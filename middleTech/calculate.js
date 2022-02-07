// function sum(a, b) {
//   return a+b;
// }
//
// function mul(a, b) {
//   return a*b;
// }
//
// function calculate(fn) {
//   return function(a) {
//     return function(b) {
//       return fn(a, b);
//     }
//   }
// }
//
// console.info(calculate(sum)(3)(2))
// console.info(calculate(mul)(3)(2))

// setTimeout(() => console.log(1), 0);
// setTimeout(() => console.log(2), 0)

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   })
// }

// var a = 15;
//
// function foo() {
//   var a = 25;
//   var res = function () {
//     console.info(a);
//   }
//
//   res.a = 35;
//
//   return res;
// }
//
// var bar = foo().bind({ a: 45 })
// bar();


function sum(a) {
  let res = a;

  return function acc (b) {
    console.info(res);
    if (!b) return res;
    res += b;
    return acc;
  }
}

console.info(sum(5)(10)(11)(12)())
