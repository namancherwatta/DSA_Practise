
let arr=[1,2,-4,-6,4,-10]

//tried with saving space but order changes
// function rearrange(arr){
//   let j=0
//   let pos=0
//   let neg=0
//     for (let i=0;i<arr.length;i++){
//          if(arr[i]>0 && j % 2 == 0){
//            [arr[j],arr[i]]=[arr[i],arr[j]]
//            j++
//          }else{
//             pos=arr[i]
//          }
         
//          if(arr[i]<0 && j %2 !==0){
//             [arr[j],arr[i]]=[arr[i],arr[j]]
//             j++
//          }

//     }
//     return arr
// }

function rearrange(arr){
   let pos=0
   let neg=1
   let ans=[]
   for(let i=0;i<arr.length;i++){
    if(arr[i]>0 ){
        ans[pos]=arr[i]
        pos+=2
    }else{
        ans[neg]=arr[i]
        neg+=2
    }
   }
return ans
}

console.log(rearrange(arr))