// Написать функцию count увеличения счётчика на единицу

function numberGenerator() {
 let number = 0;

 return () => {
   number += 1;
   return number;
 }
}

const count = numberGenerator();

console.log(count()); //1
console.log(count()); //2
console.log(count()); //3
