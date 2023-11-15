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
        let sortedArray = this.#sortRemoveDupes(array);
        this.root = this.#buildTree(sortedArray, 0, sortedArray.length-1);
    }
    
    #sortRemoveDupes(array) {
        let sortedArray = array.sort((a,b) => a-b); //sorts array
        return [...new Set (sortedArray)]; //removes dupes and returns
    }
    
    #buildTree(sortedArray, start, end) {
        if (start > end) return null;
        
        let mid = Math.floor((start + end) / 2);
        let node = new Node(sortedArray[mid]);
        
        node.left = this.#buildTree(sortedArray, start, mid-1);
        node.right = this.#buildTree(sortedArray, mid+1, end);
        
        return node;
    }

    insert(data, root=this.root) {
        if (root === null) {
            return new Node(data);
        }
        if(root.data < data) {
            root.right = this.insert(data, root.right)
        } else {
            root.left = this.insert(data, root.left);
        }
        return root;

    }

}


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) return;
    if (node.right !== null) prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

let myArray = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myArray.root)
prettyPrint(myArray.root);

let myArray2 = new Tree([10, 20, 30, 40, 100, 500]);
prettyPrint(myArray2.root);

myArray2.insert(5)
prettyPrint(myArray2.root);

// │           ┌── 6345
// │       ┌── 324
// │   ┌── 67
// │   │   │   ┌── 23
// │   │   └── 9
// └── 8
//     │       ┌── 7
//     │   ┌── 5
//     └── 4
//         │   ┌── 3
//         └── 1