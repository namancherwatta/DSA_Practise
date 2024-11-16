const arr=[0,0,2,1,2,3,4,4,1]

//  function onceNtwice(arr){
//    arr.sort()
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]==arr[i+1] || arr[i]==arr[i-1]){

//     }else{
//         return arr[i]
//     }

//    }
//    return -1
//  }

//hashmap
// function onceNtwice(arr){
//     let h= new Map()
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         h.set(num, (h.get(num) || 0) + 1);
//     }

//     for (const [num, count] of h) {
//         if (count === 1) {
//             return num;
//         }
//     }
//     return -1;
// }
//inserting data into hasmap takes log(M)--M is the no  of records


//Object
// function onceNtwice(arr) {
//     const freq = {}; // Object to store frequency of elements
  
//     // Count frequencies
//     for (let num of arr) {
//       freq[num] = (freq[num] || 0) + 1;
//     }
  
//     // Find the element with frequency 1
//     for (let key in freq) {
//       if (freq[key] === 1) {
//         return Number(key); // Return the unique element
//       }
//     }
    
//     return null; // If no unique element is found
//   }


//XOR
function onceNtwice(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr?xorr:-1;
}

console.log(onceNtwice(arr))    //// O(2N) is complexity

