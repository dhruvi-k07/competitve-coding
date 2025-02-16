import heapq

def assign_meeting_rooms(intervals):
    if not intervals:
        return []

    # Sort meetings by start time to process them in order
    intervals_with_index = sorted((start, end, i) for i, (start, end) in enumerate(intervals))

    # A min-heap to store (end_time, room_number)
    heap = []
    room_assignments = []
    room_count = 0

    # A list to store which room each meeting is assigned to
    meeting_room_assignments = [None] * len(intervals)

    for start, end, index in intervals_with_index:
        # Free up rooms which are available before the current meeting starts
        while heap and heap[0][0] <= start:
            heapq.heappop(heap)

        # If there are rooms available, use the room from the heap
        if heap:
            room_number = heap[0][1]
            heapq.heappop(heap)  # Use the room
        else:
            # Otherwise assign a new room
            room_number = room_count
            room_count += 1

        # Assign the room to the current meeting
        meeting_room_assignments[index] = room_number

        # Push the current meeting's end time and room into the heap
        heapq.heappush(heap, (end, room_number))

    # Prepare the result list
    result = [[i, meeting_room_assignments[i]] for i in range(len(intervals))]

    return result

# Example usage
intervals = [[0, 30], [5, 10], [15, 20]]
result = assign_meeting_rooms(intervals)

print(result)
