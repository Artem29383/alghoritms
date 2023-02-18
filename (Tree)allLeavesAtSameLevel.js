class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    left() {
        return this.left;
    }

    right() {
        return this.right;
    }
}

function allLeavesAtSameLevel(node) {
    //Implement me!
    if (!node) return true;
    if (!node.left || !node.right) return true;

    let leafLevel = 0;

    let checkLevel = (node, level) => {
        // base
        if (!node) return true;

        // normal - if leaf node is encountered
        if (!node.left && !node.right) {
            if (leafLevel === 0) {
                leafLevel = level;
                return true;
            }

            return level === leafLevel;
        }

        return checkLevel(node.left, level + 1) && checkLevel(node.right, level + 1);

    }

    return checkLevel(node, 0);

}


const sameLevel = new Node(1,new Node(2,new Node(7)),new Node(3,new Node(new Node(6))));
const oneLeaf = new Node(1,undefined,new Node(2));
// const diffLevel = new Node(1,new Node(2),sameLevel);

console.log(allLeavesAtSameLevel(sameLevel)) //true;
// console.log(allLeavesAtSameLevel(oneLeaf)) //true;
// console.log(allLeavesAtSameLevel(diffLevel)) //false;