# Alice has a set of buckets of various sizes, and an unlimited water supply. Her task is to measure an exact amount of water in one of the buckets.


# Buckets are unmarked and she only knows their full capacity, which is always an integer e.g. 5 gallons.


# Alice is allowed the following operations:


# Fully fill a bucket.
# Empty a bucket.
# Pour bucket into another, up until the other bucket's capacity.
# Note that Alice doesn't know how to measure water in any other way, e.g. she can't pour 1/2 of a bucket into another because her measurement would be inaccurate.


# Example: buckets have capacity 3 and 5. Alice is asked to measure 4.
# Let's denote buckets' contents by a tuple (a, b) where 0 <= a <= 3 and 0 <= b <= 5.
# We start with (0, 0) and can follow these steps:


# Fill up the big bucket (0, 5)
# Pour to the smaller one (3, 2)
# Empty the small one (0, 2)
# Pour water from big to small (2, 0)
# Fill up the big one (2, 5)
# Pour water from big to small (3, 4)
# 0_0


# Your task is to help Alice determine the shortest sequence of steps that gets desired capacity.


# Here she took 6 steps to get to 4 gallons of water.

from collections import deque

def water_jug_bfs(cap1, cap2, target):
    # A helper function to check if the target amount is in one of the buckets
    def is_solution(state):
        return state[0] == target or state[1] == target

    # A helper function to get the list of next possible states
    def get_next_states(state):
        a, b = state
        return [
            (cap1, b),         # Fill the first bucket
            (a, cap2),         # Fill the second bucket
            (0, b),            # Empty the first bucket
            (a, 0),            # Empty the second bucket
            (a - min(a, cap2 - b), b + min(a, cap2 - b)),  # Pour from first to second
            (a + min(b, cap1 - a), b - min(b, cap1 - a))   # Pour from second to first
        ]

    # Initialize BFS
    initial_state = (0, 0)  # Start with both buckets empty
    queue = deque([(initial_state, [])])  # Queue holds (state, path of operations)
    visited = set()  # Keep track of visited states
    visited.add(initial_state)

    # Perform BFS
    while queue:
        current_state, path = queue.popleft()

        # If the solution is found, return the path of operations
        if is_solution(current_state):
            return path + [current_state]

        # Generate the next states and add them to the queue if not visited
        for next_state in get_next_states(current_state):
            if next_state not in visited:
                visited.add(next_state)
                queue.append((next_state, path + [current_state]))

    # If no solution, return None
    return None

# Example usage
cap1 = 3  # Capacity of the first bucket
cap2 = 5  # Capacity of the second bucket
target = 4  # Target amount of water

solution = water_jug_bfs(cap1, cap2, target)

# Print the solution steps
if solution:
    print("Steps to reach the target:")
    for step in solution:
        print(step)
else:
    print("No solution found")
