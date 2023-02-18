// n*(n-1)

// function factorial(n) {
//     if (n <=1 ) return 1;
//
//     return n * factorial(n-1)
// }

function factorial(n) {
    let sum = 1;
    if (n <= 1 ) return 1;

    while (n > 1) {
        sum*=n
        n--;
    }
    return sum
}

// 6 * 5 * 4 * 3 * 2 * 1
console.info(factorial(0)) //1
console.info(factorial(1)) //1
console.info(factorial(6)) //720