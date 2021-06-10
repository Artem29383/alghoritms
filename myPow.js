function myPow(x) {
  if (x === 0) return 1;
  return x * myPow(x - 1)
}

console.log(myPow(10))