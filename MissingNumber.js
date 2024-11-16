
function missingNumber(arr, n){
    const summ =n*(n+1)/2
    let sum=0
    for(let a of arr){
      sum+=a
    }

    return summ-sum


}







function mmain() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
  }
  
mmain()