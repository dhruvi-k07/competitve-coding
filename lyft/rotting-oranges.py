# You are given an m x n grid where each cell can have one of three values:

# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.
# Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.



# Example 1:


# Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
# Output: 4
# Example 2:

# Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
# Output: -1
# Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
# Example 3:

# Input: grid = [[0,2]]
# Output: 0
# Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

# Constraints:

# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 10
# grid[i][j] is 0, 1, or 2.

from collections import deque

def orangesRotting(grid):
    if not grid:
        return -1

    # Get grid dimensions
    rows, cols = len(grid), len(grid[0])

    # Directions for up, down, left, right
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    # Initialize queue and count fresh oranges
    queue = deque()
    fresh_count = 0

    # Traverse the grid and add initial rotten oranges to queue
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c))  # Add rotten oranges to the queue
            elif grid[r][c] == 1:
                fresh_count += 1  # Count fresh oranges

    # If there are no fresh oranges, return 0 immediately
    if fresh_count == 0:
        return 0

    # BFS process
    minutes_passed = -1  # Since the first layer (initial state) is minute 0

    # Start BFS
    while queue:
        minutes_passed += 1
        for _ in range(len(queue)):
            r, c = queue.popleft()

            # Explore all 4-directionally adjacent cells
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                # Check if the new position is within bounds and is a fresh orange
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    # Rotten this orange and add it to the queue
                    grid[nr][nc] = 2
                    fresh_count -= 1  # One less fresh orange
                    queue.append((nr, nc))

    # If there are still fresh oranges left, return -1
    return minutes_passed if fresh_count == 0 else -1

