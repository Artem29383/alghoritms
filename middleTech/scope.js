const inc = function() {
  let counter = 0;
  return function() {
    return ++counter;
  }
}()

console.info(inc());
console.info(inc());
console.info(inc());
console.info(inc());
