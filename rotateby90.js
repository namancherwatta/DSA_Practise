let arr=[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
//brute force : turn first row into last column and second row into last but one column
// function rotate(arr){
// let n=arr.length
// let m=arr[0].length
// let ans = Array.from({ length: m }, () => Array(n).fill(0));

// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j++){
//       ans[j][n-i-1]=arr[i][j]

//     }
// }

// return ans
// }

//the actual process is transpose and reverse values in rows
function rotate(arr){
    let n=arr.length
    let m= arr[0].length
    //transpose
    for(let i=0;i<n;i++){
        for(let j=i;j<m;j++){
            [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
        }
    }
    console.log(arr)
    //reverse
    for(let i=0;i<n;i++){
        for(let j=0;j<Math.floor(m / 2);j++){
          [arr[i][m-j-1],arr[i][j]]=[arr[i][j],arr[i][m-j-1]]

        }
    }
    console.log(arr)
    return arr

}


let ans=rotate(arr)
//ans.forEach(row => console.log(row.join(' ')));
//console.log(ans)