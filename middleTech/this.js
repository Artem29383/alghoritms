// const obj = {
//   a: 42,
//   say: function () {
//     let that = this;
//     setTimeout( function ()  {
//       console.log(that.a);
//       console.log(this.a);
//     }, 100);
//   }
// }

// const customBind = (ctx, callback, ...rest) => {
//   return function(...tail) {
//     ctx[callback] = callback;
//     return ctx[callback](rest, tail);
//   }
// }
//
// const obj = {
//   a: 42,
//   say: function () {
//     function callback()  {
//       console.log(this.a);
//     }
//
//     // setTimeout(callback.bind(this) , 100);
//     setTimeout(customBind(this, callback) , 100);
//   }
// }
//
// obj.say();

const ex = (value, sum) => console.log(value + sum);
const fx = ex.bind(null, 10);

ex(12, 7);
fx(7, 12);
