let arr=[22,12,,2,10,6,0,5]


function leader(arr){
  let max=-Infinity
  let ans=[]
  for(let i=arr.length-1;i>=0;i--){
     if(arr[i]>max){
        max=arr[i]
        ans.push(arr[i])
     }
  }
  return ans.reverse()
}

console.log(leader(arr))