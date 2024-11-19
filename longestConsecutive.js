let arr=[10,1,3,5,12]

//time is more as sort is used O(NlogN)
// function longest(arr){
//     arr.sort((a, b) => a - b)
//     console.log(arr)
//     let max=-1
//     let count=1
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]==arr[i+1]-1){
//             count++
//         }else{
//             max= Math.max(count,max)
//             count=1
//         }   
//     }
//     max= Math.max(count,max)
//     return max > 1 ? max : "no Max"
// } 

//one pass with set O(N)
function longest(){
    let set = new Set(arr)
    let currele=0
    let max=0
    let cnt=0

    for(let ele of arr){
        if(!set.has(ele-1)){
         currele=ele
         cnt=1   
        while(set.has(currele+1)){
            cnt++
            currele++
        }
       max=Math.max(max,cnt)
    }
    }
    return max>1 ? max : "no max" 
}


console.log(longest(arr))