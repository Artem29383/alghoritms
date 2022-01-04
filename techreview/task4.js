// какова очередь порядка вызова

var a = 5;
setTimeout(function timeout() {
  // console.log("settimeout", a);
  a = 10;
}, 0);

var p = new Promise(function (resolve, reject) {
  // console.log("promise", a);
  a = 25;
  resolve();
});

p.then(function () {});

// console.log("just var", a);
