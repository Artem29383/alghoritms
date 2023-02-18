function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    console.info(str)
    for (let i = 0; i<Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('')) // true
console.log(isPalindrome('abcdcba')) // true
console.log(isPalindrome('abcd')) // false
console.log(isPalindrome('A man a plan a canal Panama')) // true