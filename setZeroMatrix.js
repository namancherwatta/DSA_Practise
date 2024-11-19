let arr=[[1,1,1],[2,2,4],[0,3,4]]
//med approach TC: O(2(nxm)) SC: O(n+m)
// function setzero(arr){
//    let m= arr.length //rows
//     let n= arr[0].length //cols
//     let rows=new Array(m).fill(0)
//     let cols=new Array(n).fill(0)

//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(arr[i][j]==0){
//                 rows[i]=1
//                 cols[j]=1
//             }
//         }
//     }

//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(rows[i]==1 || cols[j]==1){
//                arr[i][j]=0
//             }
//         }
//     }


//   return arr
// }

//using first row and column for reference and 1st cell wil be overlapped so we use col0 as variable 
//to store col side 
function setzero(arr){
    let m= arr.length //rows
     let n= arr[0].length //cols
    let col0=1
     for(let i=0;i<m;i++){
         for(let j=0;j<n;j++){
             if(arr[i][j]==0){
                 arr[i][0]=0
                 if(j==0){
                 col0=0
                 }else{
                 arr[0][j]=0
                }
             }
         }
     }
     // run except for first row and col
     for(let i=1;i<n;i++){
         for(let j=1;j<m;j++){
             if(arr[i][0]==0 || arr[0][j]==0){
                arr[i][j]=0
             }
         }
     }
     //run for first col
     if(arr[0][0]==0){
        for (let j = 0; j < m; j++) {
            arr[0][j] = 0;
        }
     }
     if(col0==0){
        for(let i=0;i<n;i++){
            arr[i][0]=0;
        }
     }

   return arr
 }
console.log(setzero(arr))



