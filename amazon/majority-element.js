// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     let freqMap = new Map();
//     let majorityElemCount = 0;
//     let majorityElem = 0;
//     for(let num of nums){
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }
//     for(let num in freqMap){
//         if(majorityElemCount < freqMap[num]){
//             majorityElemCount = freqMap[num]
//             majorityElem = num;
//         }
//     }
//     return majorityElem

// };

// console.log(majorityElement([2,2,1,1,1,2,2]))

//Boyer-Moore Majority Vote Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;
    
    // Candidate selection process.
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    // The candidate is guaranteed to be the majority element.
    return candidate;
};

// Example Usages:
console.log(majorityElement([3,2,3]));         // Output: 3
console.log(majorityElement([2,2,1,1,1,2,2]));   // Output: 2
