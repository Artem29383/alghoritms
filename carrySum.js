function sum(a) {
  let result = a;

  function acc(b) {
    result += b
    return acc;
  }

  acc.toString = function() {
    return result;
  }

  return acc;
}

console.log(sum(1)(2)(3)(4));