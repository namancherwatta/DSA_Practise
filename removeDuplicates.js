// function removeDuplicates(arr){
//   let set = new Set(arr);
//   let uniqueArr = Array.from(set);
  
//  return uniqueArr
// }

function removeDuplicates(arr){
      let uniqueArr=[]
      let i=0
      uniqueArr.push(arr[0])
      for(let j=1;j<arr.length; j++){
        if( uniqueArr[uniqueArr.length - 1]!== arr[j]){
          uniqueArr.push(arr[j])
          i++
        }
      }
      return uniqueArr

}





const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);

console.log("The array after removing duplicate elements is:"+ k);
