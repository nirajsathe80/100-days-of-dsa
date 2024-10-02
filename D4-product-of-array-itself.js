// Given an array arr[] of n integers, construct a product array prod[] (of the same size)
// such that prod[i] is equal to product of all the elements  of arr[] except arr[i]

// input = [10,3,5, 6,2]
// output = [180, 600, 360, 300 , 900]

const input = [10, 3, 5, 6, 2];

// Brute force approach
// TC - O(n^2)

function arrayProductExceptItselfBruteForce(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }

  return result;
}

// Optimized Solution
// TC - O(n);

function arrayProductExceptItselfOptimized(array) {
  const result = [];
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    const productExceptItself = Math.floor(product / array[i]);
    result.push(productExceptItself);
  }

  return result;
}

// const result = arrayProductExceptItself(input);

const result = arrayProductExceptItselfOptimized(input);
console.log(result);
