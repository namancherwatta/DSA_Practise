
let arr = [ 4, 3, 6, 4, 9, 10, 1,3,2];

function maxProfitIndices(prices) {
    if (prices.length < 2) {
        return "Not enough data to calculate profit.";
    }
    
    let minPrice = prices[0];
    let minIndex = 0;
    let maxProfit = 0;
    let buyIndex = 0;
    let sellIndex = 0;

    for (let i = 1; i < prices.length; i++) {
        // Check if we found a new minimum price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            minIndex = i;
        }

        // Calculate profit if we sell at current price
        let profit = prices[i] - minPrice;

        // Update max profit and indices
        if (profit > maxProfit) {
            maxProfit = profit;
            buyIndex = minIndex;
            sellIndex = i;
        }
    }

    return {
        buyIndex,
        sellIndex,
        maxProfit
    };
}

console.log(maxProfitIndices(arr));
