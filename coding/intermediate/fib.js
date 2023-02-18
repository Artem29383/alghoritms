// fib2 - Like the fib function you implemented above, able to handle numbers up to 50 (hint: look up memoization).

const fib = memoize((n) => {
    if (n < 2) return n;
    return fib(n-1) + fib(n-2);
})

function memoize(fn) {
    let cache = new Map
    console.info('cache', cache)
    return _ => {
        if (!cache.has(_)) {
            cache.set(_, fn(_))
        }
        return cache.get(_)
    }
}

// console.log(fib(0)) // 0
// console.log(fib(1)) // 1
console.log(fib(10)) // 55
// console.log(fib(50)) // 12586269025