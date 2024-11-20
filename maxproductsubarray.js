let arr=[1,2,3,-8,0,5,3,0,2,-1]


function maxProduct(arr){
 let pre=1
 let suf=1
 let max=-1

 for(let i=0;i<arr.length;i++){
    if (pre === 0) pre = 1;
    if (suf === 0) suf = 1;
    pre *= arr[i];
    suf *= arr[arr.length- i - 1];
    max = Math.max(max, Math.max(pre, suf));
 }

 return max


}


console.log(maxProduct(arr))