function throttle(callback, delay) {
  let isWorking = false;

  return function() {
    if (!isWorking) {
      isWorking = true;
      callback();
      setTimeout(function(){
        isWorking = false
      }, delay)
    }
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

