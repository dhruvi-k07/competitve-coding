// Given a Binary Tree, the task is to print the left view of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

// Helper Function for Left View using Recursion Function

function RecLeftView(root, level, maxLevel, result) {

    console.log(root, level, maxLevel)

    if(root === null){
        return
    }

    if(level > maxLevel[0]){
        result.push(root.data)
        maxLevel[0] = level
    }

    RecLeftView(root.left, level + 1, maxLevel, result);
    RecLeftView(root.right, level + 1, maxLevel, result);
}

function leftView(root){
    let result = [];
    let maxLevel = [-1]

    RecLeftView(root, 0, maxLevel, result)

    return result
}

function printArray(arr){
    console.log(arr.join(' '))
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

let result = leftView(root)

console.log(result)