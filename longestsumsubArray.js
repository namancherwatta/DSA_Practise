
//2 pointer  -- for positive and zero
// 


//hashmap  ---for Negative and positive
function getLongestSubarray(a, k){
 let map= new Map();
 let sum=0
 let maxLen = 0
 for(let i=0;i<a.length;i++){
     sum+=a[i]
    if(sum==k){
        maxLen = Math.max(maxLen, i + 1);
    }
    let rem = sum - k;
    if (map.has(rem)) {
        let len = i - map.get(rem);
        maxLen = Math.max(maxLen, len);
    }

    if (!map.has(sum)) {
        map.set(sum, i);
    }
 }
 return maxLen
}

let a = [0,2, 3,0, 5,0, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);
