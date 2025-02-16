// Naive Approach
// const rowWithMax1s = (arr) => {
//     let indexWithMax1;
//     for(let i = 0; i<arr.length; i++){
//         let count1s = 0;
//         let maxCount = 0;
//         for(let j = 0; j<arr[i].length; j++){
//             if(arr[i][j] === 1){
//                 count1s++;
//             }
//         }
//         if(count1s >= maxCount){
//             maxCount = count1s
//             indexWithMax1 = i;
//         }
//     }
//     return indexWithMax1
// }

// Better Approach Binary search
// const binarySearch = (row) => {
//     let low = 0;
//     let high = row.length - 1;
//     let firstIndexof1 = -1;
//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         if(row[mid] === 1){
//             firstIndexof1 = mid
//             high = mid - 1
//         } else {
//             low = mid + 1
//         }
//     }
//     return firstIndexof1;
// }

// const rowWithMax1s = (arr) => {
//     let indexWithMax1 = -1;

//     for(let i = 0; i< arr.length; i++){
//         const indexof1 = binarySearch(arr[i])
//         if(indexof1 !== -1){
//             const count1s = arr.length - indexof1
//             console.log(count1s)
//             if(indexWithMax1 <= count1s){
//                 indexWithMax1 = i
//             }
//         }
//     }

//     return indexWithMax1;
// }

// Optimal Approach => "Top-Right Corner Traversal" or "Greedy Search from Top-Right".

const rowWithMax1s = (mat) => {
    let n = mat.length;        // number of rows
    let m = mat[0].length;     // number of columns
    let row = 0;               // start from the first row
    let col = m - 1;           // start from the last column
    let ans = -1;              // variable to store the row index with max 1's

    // Traverse the matrix from top-right to bottom-left
    while (row < n && col >= 0) {
        if (mat[row][col] === 1) {
            // If the current cell contains a 1, update the answer to the current row
            ans = row;
            // Move left (decrease column index)
            col--;
        } else {
            // If the current cell contains a 0, move down to the next row
            row++;
        }
    }

    return ans;
};

var mat = [
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];
console.log("Index of row with maximum 1s is " + rowWithMax1s(mat));

// rowWithMax1s(mat)