// Given an array arr[] of n integers and target value, the task is to find the pair of
// sum exist or not if exits return true otherwise return false

// input = [0, -1 , 2, -3 , 1] ; target = -2;
// output = true

const arr = [0, -1, 2, -3, 1];

const target = -2;

// Brute force approach
// function findSum(arr, target) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const sum = arr[i] + arr[j];
//       if (sum === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// Optimized approach

function findSum(arr, target) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i];
    if (set.has(difference)) {
      return true;
    }
    set.add(arr[i]);
  }
  return false;
}

const result = findSum(arr, target);

console.log(result);
