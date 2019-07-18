# arrayElementCounter
Counts the amount of times each unique element appears in an array.

A simple function that takes in an ARRAY as a paramater and returns an ARRAY with each individual element and a count of the numbers of times it occurs within the array.

------------------------------------------------------------------------------------------------------------------------------

SAMPLE INPUT 1:
  const testArrayOne = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]
  
USAGE:
  elementOccCounter(testArrayOne)
  
SAMPLE OUTPUT 1: 
  [
    [1,1],[2,2],[3,3],[4,4],[5,5]
  ]
  
------------------------------------------------------------------------------------------------------------------------------
SAMPLE INPUT 2:
  
  const stringArray = ['apple', 'apple', 'apple', 'orange', 'orange']
  
USAGE:
  elementOccCounter(stringArray)
  
SAMPLE OUTPUT 3: 
  [
    ["apple", 3], ["orange", 2]
  ]
  
------------------------------------------------------------------------------------------------------------------------------
