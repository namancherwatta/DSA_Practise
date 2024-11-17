
//can be done by hashmap or moores voting algo
function majority(arr){
let ele=undefined
let cnt=0

for(let i=0;i<=arr.length-1;i++){
    if(cnt==0){
        ele=arr[i]
        cnt=1
    }else if(ele==arr[i]){
        cnt++
    }else{
        cnt--
    }
   

}

cnt = 0; // Reset count
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
        cnt++;
    }
}
return cnt > Math.floor(arr.length / 2) ? ele : "No Majority Element";

}

let arr=[2,2,2,3,2,2,2,3,2,1,2,1]
console.log(majority(arr))