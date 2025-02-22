/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;
    
    for (let num of numSet) {
        // Only start counting if num is the beginning of a sequence.
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            // Count consecutive numbers.
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longest = Math.max(longest, currentStreak);
        }
    }
    
    return longest;
};

// Example Usages:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));   // Output: 9
// console.log(longestConsecutive([1,0,1,2]));              // Output: 3
