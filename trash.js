// function debounce(callback, delay) {
//   let timer;
//   let isWork = false
//
//   return function fn () {
//     if (!isWork) {
//       isWork = true;
//       timer = setTimeout(callback, delay);
//     } else {
//       clearInterval(timer)
//       isWork = false;
//       fn();
//     }
//   }
// }
//
// const deb = debounce(() => {console.log(123)}, 1000)
//
// deb();
// deb();
// deb();
// // setTimeout(deb, 1200);
// // deb();
// // setTimeout(deb, 2500);
// // setTimeout(deb, 3600);
//
//
// // function throttle(callback, ms) {
// //   let isWorking = false;
// //
// //   return function () {
// //     if (!isWorking) {
// //       isWorking = true;
// //       callback();
// //       setTimeout(() => {
// //         isWorking = false;
// //       }, ms);
// //     }
// //   }
// // }
// //
// // const throttling = throttle(() => {
// //   console.info(4123);
// // }, 2000)
// //
// // throttling();
// // setTimeout(throttling, 2100);
// // throttling();
// // setTimeout(throttling, 3100);
// // setTimeout(throttling, 4200);

// String.fromCharCode(...(str.split('').map((c, i) => c.charCodeAt(0) - i % 10))) === 'TxnbO^lbhk-emoaq_k' /* find str ? */

const getString = () => {
  let str = 'lalala'.split('').map((c, i) => {
    console.info('c', c.charCodeAt(0))
    return c.charCodeAt(0) - i % 10
  })
  let str2 = String.fromCharCode(...'TxnbO^lbhk-emoaq_k'.split('').map((c, i) => {
    console.info('c', c.charCodeAt(0))
    return c.charCodeAt(0) + i % 10
  }))

  return [str, str2];
}

console.log(getString());
