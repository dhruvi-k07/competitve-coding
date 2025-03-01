/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Dutch National Flag
// Divide the array into 3 sections => 1 for 0s, 1 for 1s and 1 for 2s
// 3 pointers will be used:
// low: the index where the next 0 should be placed
// mid: the current index being examined
// high: the index where the next 2 should be placed
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid<=high){
        if(nums[mid] === 0){
          [nums[low], nums[mid]] = [nums[mid], nums[low]] 
          low++;
          mid++;
        } else if(nums[mid] === 1){
            mid++;
        } else if(nums[mid] === 2){
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--;
        }
    }
};