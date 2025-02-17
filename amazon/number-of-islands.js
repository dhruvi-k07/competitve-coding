// Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all
// four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  // dfs function to mark connected land cells as water
  function dfs(i, j) {
    console.log("i: ", i);
    console.log("j: ", j);
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") return;

    // Marm the current cell as water to avoid revisiting it
    grid[i][j] = "0";

    //Explore all 4 directions
    dfs(i + 1, j); // Down
    dfs(i - 1, j); // Up
    dfs(i, j + 1); // Right
    dfs(i, j - 1); // Left
  }

  // Iterate through each cell in the grid
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      // if land cell is found, its a new island
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
