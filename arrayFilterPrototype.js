const array = ['a', 'b', 'c', 'd', 'e'];

function except(exclude) {
  return this.filter((_, index) => !(Array.isArray(exclude) ? exclude : [exclude]).includes(index));
}

Array.prototype.except = except;

console.log(array.except([1,3]));
console.log(array.except(1));