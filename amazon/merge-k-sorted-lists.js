// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// A simple MinHeap implementation for ListNode based on their 'val'
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    push(node) {
        this.heap.push(node);
        this.heapifyUp();
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        this.swap(0, this.heap.length - 1);
        const min = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].val > this.heap[index].val) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }
    
    heapifyDown() {
        let index = 0;
        let length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;
            
            if (left < length && this.heap[left].val < this.heap[smallest].val) {
                smallest = left;
            }
            if (right < length && this.heap[right].val < this.heap[smallest].val) {
                smallest = right;
            }
            if (smallest === index) break;
            
            this.swap(index, smallest);
            index = smallest;
        }
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let heap = new MinHeap();
    
    // Add the head of each non-empty list into the heap.
    for (let node of lists) {
        if (node !== null) {
            heap.push(node);
        }
    }
    
    // Create a dummy head to simplify merging.
    let dummy = new ListNode(0);
    let tail = dummy;
    
    // While there are nodes in the heap, extract the smallest and attach it.
    while (heap.size() > 0) {
        let node = heap.pop();
        tail.next = node;
        tail = tail.next;
        if (node.next !== null) {
            heap.push(node.next);
        }
    }
    
    return dummy.next;
};

// Example Usage:

// Helper function to create a linked list from an array.
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

// Example 1:
let list1 = createLinkedList([1,4,5]);
let list2 = createLinkedList([1,3,4]);
let list3 = createLinkedList([2,6]);
let mergedHead = mergeKLists([list1, list2, list3]);

// Helper function to print a linked list.
function printLinkedList(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr.join("->"));
}

printLinkedList(mergedHead); // Expected output: 1->1->2->3->4->4->5->6
