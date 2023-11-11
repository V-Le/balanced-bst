// 1. Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

// 2. Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

// 3 Write a buildTree function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

// Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.array = array;
        this.root = buildTree();
    }
}

function sortUndupe(array) {
    let sortedArray = array.sort((a,b) => a-b); //sorts array
    return [...new Set (sortedArray)]; //removes dupes and returns
}

function buildTree(array, start, end) {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);
    
    node.left = buildTree(array, start, mid-1);
    node.right = buildTree(array, mid+1, end);
    
    return node;

}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) return;
    if (node.right !== null) prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  };

let myArray = sortUndupe([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myArray);
// console.log(buildTree(myArray, 0, myArray.length))
// console.log(prettyPrint(buildTree(myArray, 0, myArray.length)))
prettyPrint(buildTree(myArray, 0, myArray.length-1));


//                    8
//               4          67
//             1   5     9     324
//              3   7     23     6345   