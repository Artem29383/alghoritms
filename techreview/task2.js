function numberGenerator() {
 let number = 0;

 return () => {
   number += 1;
   return number;
 }
}

const getNumber = numberGenerator();
console.log(getNumber()); //1
console.log(getNumber()); //2
console.log(getNumber()); //3
