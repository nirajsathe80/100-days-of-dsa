// Given an array of prices[] of length n, representing the prices of the stocks on different days
// the task is to find the maximum profit possible by buying and selling the stocks on different days when
// at most one transaction is allowed. Here one transaction means 1 buy and 1 sell
// Note: Stock must buy before being sold

const inputs = [7, 10, 1, 3, 6, 9, 2];
const inputs1 = [7, 6, 4, 3, 1];

// Brute force approaches
// TC - O(n^2)

function maximumProfitBruteForce(array) {
  let maxProfit = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const difference = array[j] - array[i];
      if (difference > 0 && difference > maxProfit) {
        maxProfit = difference;
      }
    }
  }
  return maxProfit;
}

// optimized solution
// TC - O(n)

function maximumProfitOptimized(array) {
  let profit = 0;
  let minStockValue = array[0];

  for (let i = 1; i < array.length; i++) {
    const diff = array[i] - minStockValue;
    if (diff > 0 && diff > profit) {
      profit = diff;
    }
    if (array[i] < minStockValue) {
      minStockValue = array[i];
    }
  }

  return profit;
}

// const result = maximumProfit(inputs1);
const result = maximumProfitOptimized(inputs1);
console.log(result);
