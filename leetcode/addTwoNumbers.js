// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p != null || q != null) {
        let x = (p != null) ? p.val : 0;
        let y = (q != null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}

// function addTwoNumbers(a, b) {
//     let arg1 = a.length;
//     let arg2 = b.length;
//     let past = 0;
//     let temp = [];
//     a = a.reverse();
//     b = b.reverse();
//
//     if (arg1 > arg2) {
//         temp = b;
//         b = a;
//         a = temp;
//     }
//     for (let i = 0; i < a.length; i++) {
//         sum = +a[i] + +b[i];
//         past = sum > 9 ? 1 : 0;
//         if (past == 1) {
//             sum = sum % 10;
//             b[i + 1] = +b[i + 1] + +past;
//             let j = i;
//             if (isNaN(b[i + 1])) {
//                 b[i + 1] = 1;
//             }
//             while (b[j + 1] > 9) {
//                 b[j + 1] = b[j + 1] % 10;
//                 b[j + 2] = +b[j + 2] + 1;
//                 if (isNaN(b[j + 2])) {
//                     b[j + 2] = 1;
//                 }
//                 j++;
//             }
//             j = 0;
//             b[i] = sum;
//         } else {
//             b[i] = sum;
//         }
//     }
//     return b.join('');
// }



// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
// console.log(addTwoNumbers([0], [0]))
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))