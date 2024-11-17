

// function twosum(arr, k) {
//     let seen = new Set();
    
//     for (let num of arr) {
//         let complement = k - num;
//         if (seen.has(complement)) {
//             return "Yes";
//         }
//         seen.add(num);
//     }
    
//     return "No";
// }


function twoSum(arr, k) {
    let numMap = new Map(); // To store numbers and their indices
    
    for (let i = 0; i < arr.length; i++) {
        let complement = k - arr[i];
        console.log(complement)
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return indices
        }
        
        // Store the current number and its index in the map
        numMap.set(arr[i], i);
    }
    
    return []; // Return an empty array if no solution
}



let arr = [1, 8, 2, 3, 5, 9];
let k = 8;
console.log(twoSum(arr, k)); // Expected output: "Yes"
