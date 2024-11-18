function secondsmallst(array){
         var small= -Infinity
         var ssmall= -Infinity

         for(let i=0; i<array.length;i++){
            if(arr[i]> small){
                ssmall=small
                small= arr[i]
                
            }else if(arr[i]>ssmall && arr[i]!==small){
                ssmall=arr[i]
            }

         }
         
return ssmall

}

function secondSmallest(array){
    var small= Infinity
    var ssmall= Infinity

    for(let i=0; i<array.length;i++){
       if(arr[i]< small){
           ssmall=small
           small= arr[i]
           
       }else if(arr[i]<ssmall && arr[i]!==small){
           ssmall=arr[i]
       }

    }
    
return ssmall
}



const arr = [1, 2, 4, 7,7, 5];
const sS = secondSmallest(arr);
const sL = secondsmallst(arr);

console.log("Second smallest is " + sS);
console.log("Second smallst is " + sL);