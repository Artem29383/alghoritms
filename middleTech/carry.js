function sum(a) {
  let result = a

  return function acc(b) {
    if (!b) return result;
    result+=b;
    return acc;
  }
}

console.info(sum(5)(5)(5)(10)());
