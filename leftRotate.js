
// function leftRotate(array){
//    let leftrotated =[]
//    for(let i=1;i<arr.length;i++){
//     leftrotated.push(array[i])
//    }
//     leftrotated.push(array[0])

// return leftrotated
// }

//Space is reduced as no new Array is created
function leftRotate(array){
     let x= array[0]
     for(let i=0;i<array.length-1;i++){
        array[i]=array[i+1]
     }
     array[array.length-1]=x

}




const arr = [1, 2, 3, 4];
 leftRotate(arr);

console.log(arr);