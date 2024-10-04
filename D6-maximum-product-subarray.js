// Maximum product sub array
// Given an integer array, the task is to find maximum product of any sub array

const input = [-2, 6, -3, -10, 0, 2];

// TC - O(n)

function maxProduct(array) {
  let max = array[0];
  let prevMax = array[0];
  let prevMin = array[0];

  for (let i = 1; i < array.length; i++) {
    const options = [array[i], array[i] * prevMax, array[i] * prevMin];
    prevMax = Math.max(...options);
    prevMin = Math.min(...options);
    max = Math.max(max, prevMax);
  }

  return max;
}

const result = maxProduct(input);
console.log(result);
