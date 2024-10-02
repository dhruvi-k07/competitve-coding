// Given string str of size N containing only lowercase English letters. The task is to encrypt the string such that the substrings having same prefix as itself are replaced by a *. Generate the encrypted string.

// Note: If the string can be encrypted in multiple ways, find the smallest encrypted string. 

// Examples:

// Input: str = “ababcababcd”
// Output: ab*c*d
// Explanation: The substring “ababc” starting from 5th index (0 based indexing) can be replaced by a ‘*’. So the string becomes “ababcababcd” ->  “ababc*d”. Now the substring “ab” starting from 2nd index can again be replaced with a ‘*’. So the string becomes “ab*c*d”

// Input: str = “zzzzzzz”
// Output: z*z*z
// Explanation: The string can be encrypted  in 2 ways: “z*z*z” and “z**zzz”. Out of  the two “z*z*z” is smaller in length.

// Function to generate the encrypted string 
function compress(str) {
    // Stack to store encrypted string 
    let st = [];

    // Variable to store length of string 
    let n = str.length;

    // Variable to point 1st and middle index 
    let i = 0, j = Math.floor(n / 2);

    // Repeat the loop until the entire string is checked 
    while (j > 0) {
        let mid = j;

        // Compare the substring from index 0 to mid-1 with the rest of the substring after mid. 
        for (i = 0; i < mid && str[i] == str[j]; i++, j++) {}


        // If both substrings are equal then repeat the same process on this substring and store the remaining string into stack 
        if (i == mid) {
            st.push(str.slice(j, n));

            // Update the value of string 'str' with the longest repeating substring 
            str = str.slice(0, i);


            // Set the new string length to n 
            n = mid;

            // Initialize the 2nd pointer from the mid of new string 
            j = Math.floor(n / 2);
        }

        // If both substrings are not equal then decrement the 2nd pointer by 1 
        else {
            j = mid - 1;
        }
    }

    // Pop all the elements from the stack append a symbol '*' and store in a output string 
    while (st.length != 0) {
        str = str + '*' + st[st.length - 1];
        st.pop();
    }

    return str;
}

// Driver code 

// Declare and initialize the string 
let str = "ababcababcd";

console.log(compress(str))
