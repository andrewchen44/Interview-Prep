// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

var maxProfit = function(prices) {
  let profit = 0;
  let bought = false;
  let currentValue = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i] && !bought) {
      bought = true;
      currentValue = prices[i];
    } else if (prices[i + 1] < prices[i] && bought) {
      bought = false;
      profit += prices[i] - currentValue;
      currentValue = 0;
    } else if (i + 1 === prices.length && bought && prices[i] > currentValue) {
      profit += prices[i] - currentValue;
      bought = false;
      currentValue = 0;
    }
  }
  return profit;
};

// n: the number of prices
// Time Complexity: O(n) as we only iterate through the array once
// space Complexity: O(n) as we only keep track of the total profit value
// simpler way would be to go through the array and whenever the next value is greater than the current, add the difference to the profit