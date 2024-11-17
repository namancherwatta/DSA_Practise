
//dutch national flag algorithm

//0   0  0  0   1    1   1   1    .    .  .  .   2    2   2   2
//0             low              mid            high          n-1

// arr[0….low-1] contains 0. [Extreme left part]
// arr[low….mid-1] contains 1.
// arr[high+1….n-1] contains 2. [Extreme right part], n = size of the array


function zeroonetwos(arr){
let low=0
let med=0
let high=arr.length-1

  while(med<=high){
    if(arr[med]==0){
        [arr[low],arr[med]]=[arr[med],arr[low]]
        low++
        med++
    }else if(arr[med]==1){
        med++
    }else{
        [arr[med],arr[high]]=[arr[high],arr[med]]
        high--
    }



  }
return arr

}



let arr=[0,1,1,1,2,1,2,2,0,0,1]
console.log(zeroonetwos(arr))
