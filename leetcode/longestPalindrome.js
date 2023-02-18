// function longestPalindrome(s) {
//     let longest = '';
//     for (let i = 0; i < s.length; i++) {
//         // перебор подстрок с центром в i-ой позиции
//         for (let j = 0; j < 2; j++) {
//             let left = i;
//             let right = i + j;
//             // пока левая и правая позиции в пределах строки и символы совпадают
//             while (left >= 0 && s[left] === s[right]) {
//                 left--;
//                 right++;
//             }
//             // если длина подстроки больше текущей длины палиндрома
//             if (right - left - 1 > longest.length) {
//                 // обновляем длину палиндрома
//                 longest = s.slice(left + 1, right);
//             }
//         }
//     }
//     return longest;
// }

// function check(str, start, end) {
//     while (start >= 0 && end < str.length && str[start] === str[end]) {
//         start--;
//         end++;
//     }
//     return end - start - 1;


function longestPalindrome(str) {
    let result = '';

    for (let i = 0; i<str.length;i++) {
        for (let j = 0; j<2; j++) {
            let start = i;
            let end = i + j;

            while (start >= 0 && str[start] === str[end]) {
                start--;
                end++;
            }
            if (end - start - 1 > result.length) {
                result = str.slice(start + 1, end)
            }
        }
    }

    return result
}

// console.log(longestPalindrome('babad')); //bab
console.log(longestPalindrome('cbbd')) //bb
// console.log(longestPalindrome('eabcb')) //bcb
// console.log(longestPalindrome('qiwusjuuxalwppppqsxmsjjjdaskaaaaal')) //bcb