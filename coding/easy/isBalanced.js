function isBalanced(str) {
    const bracers = {
        '}': 0,
        '{': 0
    }
    str = str.split('');
    for (let i = 0; i<str.length; i++) {
        const symbol = str[i];
        if (bracers[symbol] !== undefined) {
            if (symbol === '}' && bracers[symbol] + 1 > bracers['{']) {
                return false;
            }
            bracers[symbol]++;
        }
    }

    return bracers['}'] === bracers['{'];
}

console.log(isBalanced('{}}{')) // false
console.log(isBalanced('}{')) // false
console.log(isBalanced('\\{\\{}')) // false
console.log(isBalanced('{}{}')) // true
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }')) // false
console.log(isBalanced('foo { bar } }')) // false