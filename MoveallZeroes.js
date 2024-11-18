function moveZeroes(x, array){
    let j=-1
    for(let i=0;i<x;i++){
           if(array[i]===0){
            j=i
            break
        }
    }
    if(j==-1) return array
   for(let i=j+1; i<x;i++){
    if(array[i]!==0){
       [array[i],array[j]]=[array[j],array[i]]
       j++
    }
   }
  return arr

}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let z = moveZeroes(n, arr);
console.log(z.join(' '));