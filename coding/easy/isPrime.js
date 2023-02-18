function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i<Math.sqrt(number); i++) {
        console.info('i', i)
        if (number % i === 0) {
            return false
        }
    }

    return true
}

// console.log(isPrime(23)); // true
// console.log(isPrime(1)); // false
console.log(isPrime(17)); // true
// console.log(isPrime(10000000000000)); //false