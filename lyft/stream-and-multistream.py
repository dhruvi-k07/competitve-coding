# Declare Stream class that can hold numbers.
# it has operations add() read() and remove()
# you have to add or read or remove given number of elements to Stream.


# Multi Stream (There are infinite number of streams)
# add or remove stream to multi stream.
# declare only one operation read.
# read from multi stream, when you are done reading the first stream, the pointer has to set automatically to next stream and so on, when you finished reading all chars say null

# Step 1: Stream Class
# The Stream class will hold numbers and allow the following operations:

# add(num) - Adds a number to the stream.
# read(n) - Reads n numbers from the stream.
# remove(n) - Removes n numbers from the stream.
# Step 2: MultiStream Class
# The MultiStream class will manage multiple Stream objects and allow the following operations:

# add_stream(stream) - Adds a new Stream to the MultiStream.
# remove_stream(stream) - Removes a Stream from the MultiStream.
# read(n) - Reads n numbers from the current stream. If one stream is exhausted, it moves to the next stream, and when all streams are exhausted, it returns None.

from collections import deque

class Stream:
    def __init__(self):
        self.data = deque()  # Use deque to efficiently add, remove, and read

    def add(self, num):
        """Add a number to the stream."""
        self.data.append(num)

    def read(self, n):
        """Read n numbers from the stream. Returns less if not enough numbers."""
        result = []
        for _ in range(min(n, len(self.data))):
            result.append(self.data.popleft())  # Pop from the left (FIFO)
        return result

    def remove(self, n):
        """Remove n numbers from the stream."""
        for _ in range(min(n, len(self.data))):
            self.data.popleft()  # Simply discard the elements


class MultiStream:
    def __init__(self):
        self.streams = []  # List to hold multiple streams
        self.current_stream_index = 0  # Index to track current stream

    def add_stream(self, stream):
        """Add a new stream to the MultiStream."""
        self.streams.append(stream)

    def remove_stream(self, stream):
        """Remove a stream from the MultiStream."""
        if stream in self.streams:
            self.streams.remove(stream)
        # Adjust the current stream index if necessary
        if self.current_stream_index >= len(self.streams):
            self.current_stream_index = max(0, len(self.streams) - 1)

    def read(self, n):
        """Read n numbers from the current stream. Move to the next stream if the current one is exhausted."""
        result = []
        while n > 0 and self.current_stream_index < len(self.streams):
            stream = self.streams[self.current_stream_index]
            data = stream.read(n)
            result.extend(data)
            n -= len(data)

            # If the current stream is exhausted, move to the next stream
            if len(stream.data) == 0:
                self.current_stream_index += 1

        return result if result else None


# Example usage
# Create individual streams
stream1 = Stream()
stream2 = Stream()
stream3 = Stream()

# Add numbers to streams
stream1.add(1)
stream1.add(2)
stream1.add(3)

stream2.add(4)
stream2.add(5)

stream3.add(6)
stream3.add(7)
stream3.add(8)
stream3.add(9)

# Create a MultiStream and add streams to it
multi_stream = MultiStream()
multi_stream.add_stream(stream1)
multi_stream.add_stream(stream2)
multi_stream.add_stream(stream3)

# Read from the MultiStream
print(multi_stream.read(2))  # Output: [1, 2]
print(multi_stream.read(3))  # Output: [3, 4, 5]
print(multi_stream.read(4))  # Output: [6, 7, 8, 9]
print(multi_stream.read(1))  # Output: None (no more elements left)

# Explanation:
# Stream Class:

# It uses a deque (double-ended queue) for efficient addition and removal of elements.
# The add() method appends elements to the deque.
# The read() method removes and returns the first n elements from the deque (FIFO).
# The remove() method discards n elements from the front of the deque.
# MultiStream Class:

# It maintains a list of streams and tracks the current stream using current_stream_index.
# The add_stream() method adds a new Stream object to the list of streams.
# The remove_stream() method removes a specific stream from the list.
# The read() method reads n elements from the current stream. If the current stream is exhausted, it moves to the next stream. Once all streams are exhausted, it returns None.
# Example Output:
# python
# Copy code
# [1, 2]  # Reading first 2 elements from stream1
# [3, 4, 5]  # Reading 1 remaining element from stream1 and 2 elements from stream2
# [6, 7, 8, 9]  # Reading remaining elements from stream3
# None  # No more elements in any stream
# This code handles multiple streams and reads from them in sequence, ensuring that once a stream is exhausted, the pointer automatically moves to the next available stream. When all streams are finished, it returns None.