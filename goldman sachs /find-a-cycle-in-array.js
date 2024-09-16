// Find a cycle in an array: You are given an integer array of size N.
// Every element of the array is greater than or equal to 0.
// Starting from arr[startIndex], follow each element to the index it points to. Continue to do this until you find a cycle.
// Return the length of the cycle. If no cycle is found return -1

// Test Cases
// countLengthOfCycle([1, 0], 1) == 2 ,
// countLengthOfCycle([1, 2, 0], 0) == 3

// Most Feasible Algorithm = Floyd's Tortoise and Hare Algorithm 
// Time Complexity O(n)
// Space Complexity O(1)

function countLengthOfCycle(arr, startIndex) {
    if (arr.length < 2) {
        return -1; // Not enough elements to form a cycle
    }
    
    let slow = startIndex;
    let fast = startIndex;

    // First phase: Finding the cycle using the Tortoise and Hare method
    do {
        // Move slow pointer one step
        slow = arr[slow];
        
        // Move fast pointer two steps
        fast = arr[fast];
        if (fast >= arr.length) return -1; // Out of bounds, no cycle
        fast = arr[fast];
        if (fast >= arr.length) return -1; // Out of bounds, no cycle
        
    } while (slow !== fast);

    // If we found a cycle, we now find the cycle's length
    let cycleLength = 0;
    do {
        slow = arr[slow];
        cycleLength++;
    } while (slow !== fast);
    
    return cycleLength;
}

// Test cases
console.log(countLengthOfCycle([1, 0], 1)); // Output: 2
console.log(countLengthOfCycle([1, 2, 0], 0)); // Output: 3
