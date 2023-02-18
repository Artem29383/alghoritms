function isBalanced2(str) {
    const result = [];
    const bracers = {
        '[': ']',
        '(': ')',
        '{': '}',
    }
    for (let symbol of str) {
        if (bracers[symbol]) {
            result.push(symbol);
        }
        if (symbol === '}' || symbol === ']' || symbol === ')') {
            const removeSymbol = result.pop();
            if (bracers[removeSymbol] !== symbol) {
                return false;
            }
        }
    }
    return result.length === 0;
}

console.log(isBalanced2('(foo { bar (baz) [boo] })')) // true)
console.log(isBalanced2('foo { bar { baz }')) // false)
console.log(isBalanced2('foo { (bar [baz] } )')) //false
console.info(isBalanced2('{[()()()[]{}]}{}()[[({})]]')) // true
console.info(isBalanced2('{[()()()[]{}]}{}()[[({})}]')) // false
console.info(isBalanced2(']')) // false