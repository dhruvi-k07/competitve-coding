/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()
    console.log(str)
    let left = 0;
    let right = str.length - 1;
    while(left<right){
        if(str[left] !== str[right]){
            return false
        }
        left++;
        right--;
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car"));                     // Output: false
console.log(isPalindrome(" "));                              // Output: true
