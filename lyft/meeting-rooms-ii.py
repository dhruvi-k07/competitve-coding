# Meeting Room 2

# Description
# Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
#  
# Example 1:
# Input: intervals = [[0,30],[5,10],[15,20]]
# Output: 2
# Example 2:
# Input: intervals = [[7,10],[2,4]]
# Output: 1

def minMeetingRooms(intervals):
    if not intervals:
        return 0

    # Separate start and end times
    start_times = sorted([i[0] for i in intervals])
    end_times = sorted([i[1] for i in intervals])

    # Initialize pointers for start and end times
    start_ptr = 0
    end_ptr = 0
    rooms = 0
    max_rooms = 0

    # Traverse the intervals
    while start_ptr < len(intervals):
        # If there's a meeting starting before the previous one ends, we need a new room
        if start_times[start_ptr] < end_times[end_ptr]:
            rooms += 1
            start_ptr += 1
        else:
            # Otherwise, a meeting has ended and we can reuse a room
            rooms -= 1
            end_ptr += 1

        # Keep track of the maximum number of rooms needed
        max_rooms = max(max_rooms, rooms)

    return max_rooms

