class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        # Helper function to count the number of nodes in the linked list
        def find_size(head):
            ptr = head
            size = 0
            while ptr:
                ptr = ptr.next
                size += 1
            return size

        # Recursively construct the BST
        def convert_list_to_bst(left, right):
            nonlocal head

            if left > right:
                return None

            # Choose the middle element of the current range as the root.
            mid = (left + right) // 2

            # First, build the left half
            left_child = convert_list_to_bst(left, mid - 1)

            # Now, 'head' points to the middle node, make it root
            root = TreeNode(head.val)
            root.left = left_child

            # Move head pointer to the next node
            head = head.next

            # Build the right half
            root.right = convert_list_to_bst(mid + 1, right)
            return root

        # Get the size of the linked list
        size = find_size(head)

        # Build the tree
        return convert_list_to_bst(0, size - 1)

# Example usage
# Construct the linked list [-10, -3, 0, 5, 9]
head = ListNode(-10)
head.next = ListNode(-3)
head.next.next = ListNode(0)
head.next.next.next = ListNode(5)
head.next.next.next.next = ListNode(9)

# Convert to height-balanced BST
sol = Solution()
tree_root = sol.sortedListToBST(head)

# The tree_root will now hold the root of the BST.
