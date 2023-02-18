// function fib(n) {
//     if (n < 2) return n;
//     return fib(n-1) + fib(n-2);
// }

function fib(n) {
    let sum = 0;
    if (n < 2) return n;
    let a = 0;
    let b = 1;

    while (n >= 2) {
        sum = a + b;
        a = b
        b = sum
        n--;
    }

    return sum;
}

// 0112
// abca
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(10)); // 55
console.log(fib(20)); // 6765
console.log(fib(77)); // 5527939700884757