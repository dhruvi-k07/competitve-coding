/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Map();
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
        const char = s[right];
        if(seen.has(char) && seen.get(char) >= left){
            left = seen.get(char) + 1;
        }

        seen.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength
};