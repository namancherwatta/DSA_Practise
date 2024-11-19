let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

function spiral(arr){
    let top=0
    let bottom= arr.length-1
    let left=0
    let right=arr[0].length-1
    let ans=[]
    console.log(top,bottom,left,right)
    while (top <= bottom && left <= right) {
       // For moving left to right
    for (let i = left; i <= right; i++)
        ans.push(arr[top][i]);
  
      top++;
      console.log(top,bottom,left,right)
      // For moving top to bottom.
      for (let i = top; i <= bottom; i++)
        ans.push(arr[i][right]);
  
      right--;
      console.log(top,bottom,left,right)
      // For moving right to left.
      
        for (let i = right; i >= left; i--)
         ans.push(arr[bottom][i]);
  
        bottom--;
      
      console.log(top,bottom,left,right)
      // For moving bottom to top.
      
        for (let i = bottom; i >= top; i--)
          ans.push(arr[i][left]);
  
        left++;
      
      console.log(top,bottom,left,right)
    }
    return ans; 
    
}

console.log(spiral(arr))