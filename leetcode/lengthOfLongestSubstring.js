// function lengthOfLongestSubstring(str) {
//     let data = {};
//     let max = 0;
//     for (let char of str) {
//         char = char === ' ' ? 'space' : char
//         data[char] = (data[char] || 0) + 1;
//         if (data[char] > 1) {
//             if (max < Object.keys(data).length) {
//                 max = Object.keys(data).length;
//                 data = {};
//                 data[char] = (data[char] || 0) + 1;
//             }
//         }
//     }
//
//     return Math.max(max, Object.keys(data).length);
// }

// function lengthOfLongestSubstring(str) {
//     let data = {};
//     let max = 0;
//
//     for (let i = 0; i<str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let char = str[j] === ' ' ? 'space' : str[j]
//             if (!data[i]) {
//                 data[i] = {};
//             }
//             data[i][char] = (data[i][char] || 0) + 1
//             if (data[i][char] > 1) {
//                 const keysLength = Object.keys(data[i]).length;
//                 if (max < keysLength) {
//                     data[i] = keysLength;
//                     break;
//                 }
//             }
//         }
//     }
//
//     Object.values(data).forEach((val => {
//         const lengthKeys = typeof val === 'object' ? Object.keys(val).length : val;
//         if (max < lengthKeys) {
//             max = lengthKeys
//         }
//     }));
//     return max;
// }

function lengthOfLongestSubstring(str) {
    let maxLength = 0; // здесь хранится длина максимальной подстроки без повторяющихся символов
    let start = 0; // начальный индекс подстроки
    let charMap = {}; // объект, хранящий индексы символов

    str.split('').forEach((symbol, index) => {
        // если символ уже встречался, то перемещаем начало подстроки на позицию после символа
        if (charMap[symbol] >= start) {
            start = charMap[symbol] + 1;
        }
        charMap[symbol] = index; // обновляем индекс символа
        // обновляем максимальную длину подстроки
        maxLength = Math.max(maxLength, index - start + 1);
    })

    return maxLength;
}



console.log(lengthOfLongestSubstring('abcabcbb')) //3 abc
console.log(lengthOfLongestSubstring('b')) //1 b
console.log(lengthOfLongestSubstring('pwwkew')) //3 wke
console.log(lengthOfLongestSubstring(' ')) //1
console.log(lengthOfLongestSubstring('aab')) //2
console.log(lengthOfLongestSubstring('dvdf')) //3
console.log(lengthOfLongestSubstring('jbpnbwwd')) //4