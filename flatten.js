const array = [1, [1, 2, [3, 4]], [2, 4]];


const flatten = arr => {
  return arr.reduce((acc, element) => {
    const isArray = Array.isArray(element);
    return isArray ? acc.concat(flatten(element)) : acc.concat(element);
  }, [])
}

Array.prototype.flatten = function () {
  return flatten(this);
};

console.info(flatten(array));
console.info(array.flatten());