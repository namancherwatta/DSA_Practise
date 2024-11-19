let arr=[3, 1, 2, 4,0,2]
let k=6

function subsum(arr,k){
   let map=new Map();
  let presum=0
  let cnt=0
  map.set(0, 1);
   for(let i=0;i<arr.length;i++){
       presum+=arr[i]
       const r= presum-k

       if(map.has(r)){
        cnt+=map.get(r)
       }

       map.set(presum, (map.get(presum) || 0) + 1);
   }
  return cnt
}

console.log(subsum(arr,k))