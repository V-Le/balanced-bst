// 1. Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

// 2. Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

// 3 Write a buildTree function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

// Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.

// const prettyPrint = (node, prefix = "", isLeft = true) => {
//     if (node === null) {
//       return;
//     }
//     if (node.right !== null) {
//       prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//     }
//     console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//     if (node.left !== null) {
//       prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//     }
//   };

