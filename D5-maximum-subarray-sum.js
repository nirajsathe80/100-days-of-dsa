// Maximum sub array sum (Kadane's algorithm)
// Given an array arr[], the task is to find the sub array that has maximum sum and return its sum

// input = [2,3,-8,7,-1,2,3];
// output = 11
// explanation : the sun array [7,-1,2,3] is equal to 11

const input = [2, 3, -8, 7, -1, 2, 3];
const input1 = [-2, -4];
const input2 = [5, 4, 1, 7, 8];

function maximumSubArraySum(arr) {
  let sum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

const result = maximumSubArraySum(input2);
console.log(result);
