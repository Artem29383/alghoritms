function smallest(n) {
    const str = n.toString().split('');
    let result = [n, 0 , 0];

    str.forEach((value, index) => {
        const removed = (str.slice(0, index) + str.slice(index + 1)).split(',').join('').split('');
        removed.forEach((rValue, j) => {
            const number = +(removed.slice(0, j) + str[index] + removed.slice(j)).split(',').join('');
            if (result[0] > number) {
                result = [number, index, j];
            }
        })
    })

    return result;
}


// console.log(smallest(261235)) //, [126235, 2, 0]);
// console.log(smallest(209917)) //, [29917, 0, 1]);
// console.log(smallest(285365)) //, [238565, 3, 1]);
// console.log(smallest(269045)) //, [26945, 3, 0]);
console.log(smallest(296837)) //, [239687, 4, 1]);