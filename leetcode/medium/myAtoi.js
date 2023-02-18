// function myAtoi(str) {
//     let prev = ' ';
//     const maxPositive = 2147483647;
//     const maxNegative = 2147483648;
//     let isPositiveNumber = {
//         value: true,
//         touched: false,
//     };
//     let number = '0';
//
//     for (let symbol of str) {
//         if (['+', '-'].includes(symbol) && !isPositiveNumber.touched && !/^[0-9]$/.test(prev)) {
//             isPositiveNumber = {value: checkSign(symbol), touched: true};
//         }
//
//         if (/^[a-zA-Z.]$/.test(symbol) || ['+', '-'].includes(symbol) && !/^[\s]$/.test(prev) || symbol === ' ' && /^[0-9+-]$/.test(prev)) {
//             if (!+number) return +number;
//             return returnValidNumber(number, maxPositive, maxNegative, isPositiveNumber);
//         }
//
//         if (/^[0-9]$/.test(symbol)) {
//                 number+=symbol;
//         }
//         prev = symbol;
//     }
//
//     return returnValidNumber(number, maxPositive, maxNegative, isPositiveNumber);
// }
//
// function checkSign(symbol) {
//      return symbol === '+'
// }
//
// function returnValidNumber(number, maxPositive, maxNegative, isPositiveNumber) {
//     number = +number;
//
//     if (number > maxPositive && isPositiveNumber.value) {
//         number = maxPositive;
//     }
//     if (number > maxNegative && !isPositiveNumber.value) {
//         number = maxNegative;
//     }
//
//     return isPositiveNumber.value ? number : -number;
// }

// function myAtoi(s) {
//     const INT_MAX = 2147483647; // Maximum value of a 32-bit signed integer
//     const INT_MIN = -2147483648; // Minimum value of a 32-bit signed integer
//
//     let i = 0;
//     let sign = 1;
//     let result = 0;
//
//     // Skip leading whitespace
//     while (i < s.length && s[i] === ' ') {
//         i++;
//     }
//
//     // Check for optional sign character
//     if (i < s.length && (s[i] === '+' || s[i] === '-')) {
//         sign = (s[i] === '-') ? -1 : 1;
//         i++;
//     }
//
//     // Parse the remaining digits
//     while (i < s.length && s[i] >= '0' && s[i] <= '9') {
//         result = result * 10 + (s[i] - '0');
//
//         // Check for overflow
//         if (sign === 1 && result > INT_MAX) {
//             return INT_MAX;
//         }
//         if (sign === -1 && result > -INT_MIN) {
//             return INT_MIN;
//         }
//
//         i++;
//     }
//
//     return sign * result;
// }

function myAtoi(str) {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;
    let i = 0;
    let sign = 1;
    let result = 0;

    while (i < str.length && str[i] === ' ') {
        i++;
    }

    if (i<str.length && str[i] === '+' || str[i] === '-') {
        sign = str[i] === '+' ? 1 : -1;
        i++;
    }

    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        result = result * 10 + +str[i];

        if (result > MAX_INT && sign === 1) {
            return MAX_INT;
        }
        if (result > -MIN_INT && sign === -1) {
            return MIN_INT;
        }

        i++;
    }

    return sign * result;
}


console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('00302'));
console.log(myAtoi("words and 987"))
console.log(myAtoi('-91283472332'));
console.log(myAtoi('3.14159'))
console.log(myAtoi('+-12'))
console.log(myAtoi('00000-42a1234'))
console.log(myAtoi('  -0012a42'))
console.log(myAtoi("   +0 123"))
console.log(myAtoi("-13+8"))
console.log(myAtoi("123-"))
console.log(myAtoi("  +  413"))
console.log(myAtoi("      -11919730356x"))