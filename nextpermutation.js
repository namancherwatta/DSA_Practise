//let arr=[2,1,5,4,3,0,0]
let arr=[5,4,2]

function nextperm(){
    let index=-1
    let n=arr.length
//find the breakpoint or the longest prefix match upto where the elements increase and then drops
for(let i=n-2;i>=0;i--){
    if(arr[i]<arr[i+1]){
        index=i
        break
    }
}

 //for array where the perumatation is at last    
if(index==-1){
    return arr.reverse()
}


//find the ele greater than index element but lowest of remaining, then swap them
for(let i=n-1;i>index;i--){
    if(arr[i]>arr[index]){
      [arr[i],arr[index]]=[arr[index],arr[i]]
      break
    }

}

// reverse the remaining part of array as we need next lowest number
let left = index + 1;
let right = n - 1;

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}

return arr
}

console.log(nextperm(arr))