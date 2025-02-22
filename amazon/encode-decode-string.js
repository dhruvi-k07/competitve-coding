class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for(let str of strs){
            encoded += str.length + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while(i<str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            const len = parseInt(str.substring(i,j))
            const strarr = str.substring(j+1, j+1+len);
            result.push(strarr);
            i=j+1+len;
        }
        return result
    }
}

const sol = new Solution();
// Example Usage:
const strs1 = ["neet", "code", "love", "you"];
const encoded1 = sol.encode(strs1);
console.log("Encoded:", encoded1);
console.log("Decoded:", sol.decode(encoded1));

// const strs2 = ["we", "say", ":", "yes"];
// const encoded2 = sol.encode(strs2);
// console.log("Encoded:", encoded2);
// console.log("Decoded:", sol.decode(encoded2));