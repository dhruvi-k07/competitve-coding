/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Build a map from node value to its index in the inorder array
    const inorderMap = new Map();
    for(let i=0; i<inorder.length; i++){
        inorderMap.set(inorder[i], i);
    }

    // This variable will keep track of the current index in the preorder array;
    let preIndex = 0;

    /* Recursive helper function to build the tree
    @param {number} left - left boundary in the inorder array
    @param {number} right - right boundary in the inorder array
    return {TreeNode}
    */

    function helper(left, right){
        // If there are no elements to construct the subtree
        if(left>right) return null;

        // The next element in preorder is the root
        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);

        // Find the index of this value in the inorder array
        const index = inorderMap.get(rootVal);

        // Recursively build the left subtree and right subtree
        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};