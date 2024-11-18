let arr = [3, 4, 2, 6, 4, 2, 9, 10, 1];

function stock(arr) {
    let min = 0;          // Index of the minimum value (buy day)
    let max = 0;          // Index of the maximum value (sell day)
    let maxProfit = 0;    // Maximum profit

    for (let i = 1; i < arr.length; i++) {
        // Check for new profit opportunity
        if (arr[i] - arr[min] > maxProfit) {
            maxProfit = arr[i] - arr[min];
            max = i; // Update sell day
        }

        // Update the buy day if a lower price is found
        // Only do this if it doesn't disrupt the order (max must be after min)
        if (arr[i] < arr[min] && i < max) {
            min = i;
        }
    }

    // If no profit is possible (e.g., strictly decreasing array)
    if (maxProfit <= 0) return [-1, -1];

    // Return the indices of the buy and sell days
    return [min, max];
}

console.log(stock(arr)); // Output: [2, 7]
