class IntersectionIterator:
    def __init__(self, it1, it2):
        # Convert the input to iterators
        self.it1 = iter(it1)
        self.it2 = iter(it2)
        self.val1 = None
        self.val2 = None
        self.next_common = None
        self._advance_iterators()
        
    def _advance_iterators(self):
        """Advance both iterators until we find a common element or reach the end."""
        try:
            if self.val1 is None:
                self.val1 = next(self.it1)
            if self.val2 is None:
                self.val2 = next(self.it2)
                
            while True:
                if self.val1 == self.val2:
                    self.next_common = self.val1
                    self.val1 = self.val2 = None  # Reset for the next iteration
                    break
                elif self.val1 < self.val2:
                    self.val1 = next(self.it1, None)  # Advance it1
                    if self.val1 is None:
                        break
                else:
                    self.val2 = next(self.it2, None)  # Advance it2
                    if self.val2 is None:
                        break
        except StopIteration:
            self.next_common = None
    
    def hasNext(self):
        """Return True if there is a next common element."""
        return self.next_common is not None
    
    def next(self):
        """Return the next common element, or raise StopIteration if none exist."""
        if not self.hasNext():
            raise StopIteration("No more elements")
        
        result = self.next_common
        self._advance_iterators()  # Move to the next common element
        return result

# Example usage:

# Example 1
it = IntersectionIterator([1, 2, 4, 5, 6], [1, 3, 5])
print(it.hasNext())  # True
print(it.next())     # 1
print(it.next())     # 5
print(it.hasNext())  # False

# Example 2
it = IntersectionIterator([1, 2, 4, 5, 6], [3, 7, 8, 9])
print(it.hasNext())  # False

# Example 3
it = IntersectionIterator([1, 2, 3, 4], [1, 2, 3, 4])
print(it.hasNext())  # True
print(it.next())     # 1
print(it.next())     # 2
print(it.next())     # 3
print(it.next())     # 4
print(it.hasNext())  # False
