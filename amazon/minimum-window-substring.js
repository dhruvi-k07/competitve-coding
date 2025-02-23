/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length === 0 || t.length === 0) return "";

    // Step 1: Build a frequency map for t
    const dictT = new Map();
    for(let char of t){
        dictT.set(char, (dictT.get(char) || 0) + 1);
    }

    const required = dictT.size;

    let left = 0, right = 0;
    
    //formed tracked how many unique characters in the current window have the desired count
    let formed = 0;

    // Map to keep track of counts of characters in the current window
    const windowCounts = new Map();

    // ans tuple of the form [window length, left, right]
    let ans = [-1, 0, 0]

    // Step 2: start expanding the window using the right pointer
    while(right < s.length){
        const char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        // If the current character's count in the window matches the required count in t
        if(dictT.has(char) && windowCounts.get(char) === dictT.get(char)){
            formed++;
        }

        // Step 3: Try contacting the window till it ceases to be 'desirable'
        while(left <= right && formed === required){
            const currentChar = s[left];

            // Update the answer if this window is smaller than the previous ones
            if(ans[0] === -1 || right - left + 1 < ans[0]){
                ans = [right-left+1, left, right]
            }

            // Remove the lestmost character from the window
            windowCounts.set(currentChar, windowCounts.get(currentChar) - 1);
            if(dictT.has(currentChar) && windowCounts.get(currentChar)< dictT.get(currentChar)){
                formed--;
            }
            left++;
        }
        right++;
    }
    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2]+1)
};