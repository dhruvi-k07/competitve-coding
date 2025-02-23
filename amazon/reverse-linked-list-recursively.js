function ListNode(val, next = null) {
    this.val = val;
    this.next = next
}

function recursiveReverseLinkedList(head) {
    if(head === null || head.next === null) return head;
    let p = recursiveReverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return p
}

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print a linked list (for testing).
function printLinkedList(head) {
    const values = [];
    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    console.log(values.join(" -> "));
}

// Example Usage:
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
printLinkedList(head);

let reversedHead = recursiveReverseLinkedList(head);
console.log("Reversed list:");
printLinkedList(reversedHead);