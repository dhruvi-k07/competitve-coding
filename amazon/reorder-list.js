/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function ListNode(val, next = null){
    this.val = val;
    this.next = next
}

var reorderList = function(head) {
    if(!head || !head.next) return;

    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null;
    let prev = null;

    while(second) {
        let temp = second.next; 
        second.next = prev;
        prev = second;
        second = temp;
    }

    let first = head;
    second = prev;
    while(second){
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};