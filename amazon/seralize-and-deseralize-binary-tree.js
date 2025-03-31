/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];

    function dfs(node){
        if(node === null){
            result.push("null")
            return;
        }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const values = data.split(",");

    function buildTree(){
        if(values.length === 0) return null;
        const val = values.shift();
        if(val === "null") return null;

        const node = new TreeNode(Number(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }

    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */