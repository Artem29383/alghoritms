var a = 5;

function f() {
  if (a) {
    console.log(a);
    var a = 10;
    console.log(a);
  }
}

f();
