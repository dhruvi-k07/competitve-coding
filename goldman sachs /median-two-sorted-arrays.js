// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let A = nums1, B = nums2
    const total = A.length + B.length
    const half = Math.floor(total/2)
    if(B.length < A.length){
        let temp = A
        A = B;
        B = temp;
    }
    let left = 0
    let right = A.length - 1
    
    while(true){
        let i = left + right
        let j = half - i - 2;

        let Aleft = Number.NEGATIVE_INFINITY
        if(i>=0){
            Aleft = A[i]
        }
        let Aright = Number.POSITIVE_INFINITY
        if((i+1) < A.length){
            Aright = A[i+ 1]
        }

        let Bleft = Number.NEGATIVE_INFINITY
        if(j>=0){
            Bleft = B[j]
        }
        let Bright = Number.POSITIVE_INFINITY
        if((j+1) < B.length){
            Bright = B[j+ 1]
        }

        if (Aleft <= Bright && Bleft <= Aright) {
            if(total%2 !== 0){
                return Math.min(Aright, Bright)
            }
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright))/2
        } else if(Aleft > Bright){
            right = i - 1
        } else {
            left = i + 1
        }

    }

};