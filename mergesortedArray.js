let arr1=[1,4,10]
let arr2=[0,2,5,12]


//2 pointer: 1 pointer at max of 1 array and other one at lowest of 2nd array
//tc: O(min(n,m)+nlogn+mlogm)
// function mergesort(arr1,arr2){
//   let m=arr1.length
//   let n=arr2.length
//    let left=m-1
//    let right=0    
//   while(arr1[left]>arr2[right]){
//         [arr1[left],arr2[right]]=[arr2[right],arr1[left]]
//         left--
//         right++
//   }
//  arr1.sort((a, b) => a - b)
//  arr2.sort((a, b) => a - b)
// return arr1.join(' ')+'\n'+(arr2.join(' '))
// }


//gap method: take gap as ceil or grtint (m+n/2) , take 2 pointers check=>swap and go next untill right pointer goes out of index 
//restart ceil (gap=gap/2) ....... till gap=1
function mergesort(arr1,arr2){
    let m= arr1.length
    let n=arr2.length
    let gap=Math.ceil(m+n/2)
    while(gap>0){
        let left=0
        let right=left+gap
        while(right<m+n){
            if(left<m && right>=m){//left and right in 2 arrays
             if(arr1[left]>arr2[right-m]){
                [arr1[left],arr2[right-m]]=[arr2[right-m],arr1[left]]
             }
            }else if(left>m){//both in 2nd array
              if(arr2[left-m]>arr2[right-m]){
                [arr2[left-m],arr2[right-m]]=[arr2[right-m-1],arr2[left-m]]
              }
            }else{//both in 1st array
              if(arr1[left]>arr1[right]){
                [arr1[left],arr1[right]]=[arr1[right],arr1[left]]

              }
            }
            left++
            right++
        } 
        
        if(gap==1){break}
        gap=Math.ceil(gap/2)     
    
    }
    return arr1+","+arr2

}


console.log(mergesort(arr1,arr2))
