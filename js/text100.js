'use strict';

const input1 = [100, 200, 50, 38, 20, 388];
const input2 = [100, 90, 40, 30, 20];
function MaxProfit(input) {
  const first = input1[0];
  let maxprofit = 0;
  for (let price of input) {
    if (first < price) {
      maxprofit = Math.max(maxprofit, price - first);
    } else {
      maxprofit;
    }
  }
  return maxprofit;
}

console.log(MaxProfit(input1));
console.log(MaxProfit(input2));
