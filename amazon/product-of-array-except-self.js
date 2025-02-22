var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Left pass: calculate product of elements to the left of each index.
  answer[0] = 1;
  console.log(answer);
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
    console.log('answer[i - 1]: ', answer[i - 1])
    console.log('nums[i - 1]: ', nums[i - 1])
    console.log('answer[i]: ', answer[i])
    console.log(answer);
  }

  // Right pass: calculate product of elements to the right and multiply.
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right *= nums[i];
  }

  return answer;
};

// Example Usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
