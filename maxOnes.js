



const arr = [0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0]
//2 pointers
// function maxOnes(arr){
//     let max =0
//     let j=0
//     let N= arr.length
//     //first 1
//     let first = true
 
//     for(let i=0;i<N;i++){
//       if(arr[i]==1 && first){
//          j=i
//          first=false
//       }else if(arr[i]==1){
//          max=Math.max(max,i-j)
//       }else{
//          first=true
//       }      
//     }
//    return max+1
//  }

//count
function maxOnes(nums){
        let  cnt = 0;
        let maxi = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                cnt++;
            } else {
                cnt = 0;
            }

            maxi = Math.max(maxi, cnt);
        }
    return maxi
}
console.log(maxOnes(arr))