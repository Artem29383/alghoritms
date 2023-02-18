// preloaded Node definition :
class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }
}

// function treeToArray(root) {
//     if (!root) {
//         return [];
//     }
//     const result = [];
//     const queue = [root];
//     while (queue.length) {
//         const node = queue.shift();
//         if (node.data !== undefined) {
//             result.push(node.data);
//         }
//         if (node.children) {
//             node.children.forEach(child => {
//                 if (child) {
//                     queue.push(child);
//                 }
//             });
//         }
//     }
//     return result;
// }

// function treeToArray(tree) {
//
//     if (!Array.isArray(tree)) tree = [tree];
//
//     if (tree.length === 0) return [];
//
//     return [
//         ...tree.map(node => node.data),
//         ...treeToArray(tree.flatMap(node => node.children))
//     ];
// }


// function treeToArray(tree, result = []) {
//     if (!Array.isArray(tree)) tree = [tree];
//
//     if (tree.length === 0) return []
//
//     tree.forEach(node => {
//         result.push(node.data);
//     })
//
//     treeToArray(tree.flatMap(node => node.children), result);
//     return result;
// }











function treeToArray(tree, result = []) {
    const children = Array.isArray(tree) ? tree : [tree]

    if (tree.length === 0) return [];

    children.forEach(node => {
        result.push(node.data)
    })

    treeToArray(children.flatMap(node => node.children), result);

    return result;
}










console.log(treeToArray(new Node(1, [new Node(2, [new Node(3), new Node(4), new Node(5)]), new Node(3, [new Node(7)])])))
//[1, 2, 3, 3, 4, 5, 7]