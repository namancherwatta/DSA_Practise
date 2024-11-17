
//kadanes algorithm
let arr=[1,-2,-3,6,-1,3,-1]


function maxsum(arr){
let max=-Infinity
let sum=0
let start=0
let end=0
for(let i=0;i<arr.length;i++){
if(sum==0) start=i
   sum+=arr[i]
   if(sum>max){
    max=sum
    end = i;
   }
   
   if(sum<0){
    sum=0
   }

}
return [max,start,end]

}

console.log(maxsum(arr))