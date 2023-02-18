function landPerimeter(arr) {
    let perimeter = 0;
    let prev = null;
    const columns = {};
    arr.forEach((str, index) => {
        const symbols = str.split('');
        columns[index] = symbols;
        prev = null;
        symbols.forEach((symbol, symbolIndex) => {
            if (symbol === 'X') {
                if (prev === 'O' || !prev) {
                    perimeter+=4;
                }
                if (prev === 'X') {
                    perimeter+=2;
                }
                if (columns[index - 1] && columns[index - 1][symbolIndex] === 'X') {
                    perimeter-=2;
                }
                prev = 'X';
            } else {
                prev = 'O';
            }
        })
    })

    return `Total land perimeter: ${perimeter}`;
}

console.log(landPerimeter(
    ["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]
)) //52
console.log(landPerimeter(
    ["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]
)) //54
console.log(landPerimeter(
    ["OOOOXO",
         "XOXOOX",
         "XXOXOX",
         "XOXOOO",
         "OOOOOO",
         "OOOXOO",
         "OOXXOO"
    ]
)) //40

console.log(landPerimeter(
       ['XOOXO',
            'XOOXO',
            'OOOXO',
            'XXOXO',
            'OXOOO'])) //24

console.log(landPerimeter(
    ['XOOO',
        'XOXO',
        'XOXO',
        'OOXX',
        'OOOO']
)) //18