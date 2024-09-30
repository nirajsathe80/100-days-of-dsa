// Find duplicates in O(n) and O(1) space
// Given an array of n elements that contains elements from 0 to n-1, with any of these number appearing
// any number of times. Find these repeating numbers in O(n) and use only constant memory

// Note: The repeating elements should be printed only once.

const input = [1, 2, 3, 6, 3, 6, 1];
const input1 = [1, 2, 3, 4, 3];
const input2 = [4, 3, 2, 7, 8, 2, 3, 1];

// Brute force approach
// TC- O(n^2);

function findDuplicatesBruteForce(array) {
  const set = new Set();

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        set.add(array[i]);
        continue;
      }
    }
  }

  return [...set];
}

// Optimized solution
// TC - O(n * log n);

function findDuplicatesOptimized(array = []) {
  const result = [];
  array.sort((a, b) => a - b);

  let currentElement = array[0];
  let count = 0;

  for (let i = 1; i < array.length; i++) {
    if (currentElement === array[i] && count === 0) {
      result.push(array[i]);
      count++;
      continue;
    }
    currentElement = array[i];
    count = 0;
  }

  return result;
}

// most optimized solution
// TC - O(n);

function findDuplicatesMostOptimized(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let absoluteValue = Math.abs(array[i]);
    let index = absoluteValue - 1;
    if (array[index] < 0) {
      result.push(Math.abs(array[i]));
    }
    array[index] *= -1;
  }

  return result;
}

// const result = findDuplicates(input1);

const result = findDuplicatesMostOptimized(input2);
console.log(result);
