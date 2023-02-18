function deepCompare(o1, o2) {
    if (o1 === o2) return true;
    if (!o1 || !o2) return false;
    const keys = Object.keys(o1)
    const keys2 = Object.keys(o2)

    if (keys.length !== keys2.length) return false;

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof o1[key] === 'object') {
            if (!deepCompare(o1[key], o2[key])) return false;
        } else {
            if (o1[key] !== o2[key]) return false;
        }
    }

    return true
}

// console.log(deepCompare({
//         name: 'a', c: 'b', person: {
//             name: 'artem'
//         }
//     },
//     {
//         name: 'b', c: 'd', person: {
//             name: 'd'
//         }
//     }
// ))
console.log(deepCompare({
        person: {
            name: 'artem',
            c: {
                d: 3,
                x: {
                    f: 5
                },
                z: 2
            },
        }
    },
    {
        person: {
            name: 'artem',
            c: {
                d: 3,
                x: {
                    f: 5
                },
                z: 5
            },
        }
    }
))