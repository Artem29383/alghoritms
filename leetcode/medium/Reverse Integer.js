function reverseInteger(integer) {
    const withSign = integer < 0 ? '-' : '';

    const number = Math.abs(integer).toString();

    const reverseNumber = number.split('').reverse().join('');

    if ((withSign && +reverseNumber > 2147483648) || (!withSign && +reverseNumber > 2147483648 - 1)) return 0;

    return withSign + reverseNumber;
}

console.log(reverseInteger(-123)) //-321