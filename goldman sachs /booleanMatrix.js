// const setOnes = arr => {

//     let newArr = arr;

//     let numRows = arr.length;
//     let numCols = arr[0].length;

//     let rowSet = new Array(numRows).fill(false)
//     let colSet = new Array(numCols).fill(false)

//     for(let i=0; i<numRows; i++){
//         for(let j=0; j<numCols; j++){
//             if(arr[i][j] === 1){
//                 rowSet[i]= true;
//                 colSet[j] = true;
//             }
//         }
//     }

//     for(let i = 0; i<numRows; i++){
//         for(let j=0;j<numCols; j++){
//             if(rowSet[i] || colSet[j]){
//                 newArr[i][j] = 1
//             }
//         }
//     }
//     return newArr
// }

const setOnes = arr => {
    let numRows = arr.length;
    let numCols = arr[0].length;

    let firstRowHasOne = false;
    let firstColHasOne = false;

    // Step 1: Check if the first row contains any 1
    for (let j = 0; j < numCols; j++) {
        if (arr[0][j] === 1) {
            firstRowHasOne = true;
            break;
        }
    }

    // Step 2: Check if the first column contains any 1
    for (let i = 0; i < numRows; i++) {
        if (arr[i][0] === 1) {
            firstColHasOne = true;
            break;
        }
    }

    // Step 3: Use first row and first column as markers
    for (let i = 1; i < numRows; i++) {
        for (let j = 1; j < numCols; j++) {
            if (arr[i][j] === 1) {
                arr[i][0] = 1; // Mark the row
                arr[0][j] = 1; // Mark the column
            }
        }
    }

    // Step 4: Update the matrix based on the markers
    for (let i = 1; i < numRows; i++) {
        for (let j = 1; j < numCols; j++) {
            if (arr[i][0] === 1 || arr[0][j] === 1) {
                arr[i][j] = 1;
            }
        }
    }

    // Step 5: Update the first row if necessary
    if (firstRowHasOne) {
        for (let j = 0; j < numCols; j++) {
            arr[0][j] = 1;
        }
    }

    // Step 6: Update the first column if necessary
    if (firstColHasOne) {
        for (let i = 0; i < numRows; i++) {
            arr[i][0] = 1;
        }
    }

    return arr;
};


const arr = [
  [1, 0, 2, 1],
  [3, 4, 5, 2],
  [0, 3, 0, 5]
];

console.log("The Final Matrix is:",setOnes(arr));
// printMatrix(arr);
