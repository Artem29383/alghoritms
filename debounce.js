// function debounce(fn, ms) {
//   let timerId;
//   let isWork = false;
//
//   return function trot(args) {
//     if (!isWork) {
//       isWork = true;
//       timerId = setTimeout(function() {
//         fn(args);
//       }, ms)
//     } else {
//       isWork = false;
//       clearInterval(timerId);
//       trot(args);
//     }
//   }
// }

function debounce(fn, ms) {
  let timerId;

  return function(number) {
    if (!timerId) {
      fn(number);
    }
    clearInterval(timerId);
    timerId = setTimeout(function () {
      fn(number);
    }, ms);
  }
}

const deb = debounce(function(v) { console.log(v) }, 500);

deb(5);
deb(5);
deb(5);
setTimeout(() => {deb(6)}, 2000)
setTimeout(() => {deb(7)}, 1500)
setTimeout(() => {deb(8)}, 1000)
setTimeout(() => {deb(9)}, 4500)
setTimeout(() => {deb(11)}, 6500)