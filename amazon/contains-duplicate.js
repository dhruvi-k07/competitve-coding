/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const counterMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let sum = (counterMap.get(nums[i]) || 0) + 1;
    if (sum > 1) {
      return true;
    } else {
      counterMap.set(nums[i], sum);
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
