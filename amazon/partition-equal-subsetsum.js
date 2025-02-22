/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if(sum % 2 !== 0) return false;
  let target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for(let num of nums){
    console.log(num);
    for(let j = target; j>=num; j--){
        dp[j] = dp[j] || dp[j - num]
        // console.log(dp[j])
        // console.log(dp)
    }
  }

  return dp[target]
};
console.log(canPartition([1,5,11,5]));  // Output: true
console.log(canPartition([1,2,3,5]));    // Output: false