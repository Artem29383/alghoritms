// function throttle(callback, delay) {
//   let isWorking = false;
//
//   return function() {
//     if (!isWorking) {
//       isWorking = true;
//       callback();
//       setTimeout(function(){
//         isWorking = false
//       }, delay)
//     }
//   }
// }



const throttle = (callback, ms) => {
  let isWork = false;

  return function() {
    if (isWork) return;
    isWork = true;
    callback();
    setTimeout(() => {
      isWork = false;
    }, ms);
  }
}


const throttling = throttle(() => {
  console.info(4123);
}, 2000)

throttling();
setTimeout(throttling, 2100);
throttling();
setTimeout(throttling, 3100);
setTimeout(throttling, 4200);

