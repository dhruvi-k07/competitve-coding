/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    // Helper function that computes the maximum branch sum from node
    function dfs(node){
        if(node === null) return 0;

        // Recursively compute the maximum branch sum from left and right
        // We ignore negative sums(if negative, better to not choose that branch);

        const leftGain = Math.max(dfs(node.left), 0);
        const rightGain = Math.max(dfs(node.right), 0);

        // Price of the current path that passes through the node and both children
        const currentPathSum = node.val + leftGain + rightGain;

        // Update the global maximum path sum if the current path is better
        maxSum = Math.max(maxSum, currentPathSum);

        // Return the maximum gain the current node and one subtree can add to the current path
        return node.val + Math.max(leftGain, rightGain);
    }

    dfs(root);
    return maxSum;
};