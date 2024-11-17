
// function missingNumber(arr, n){
//     const summ =n*(n+1)/2
//     let sum=0
//     for(let a of arr){
//       sum+=a
//     }

//     return summ-sum


// }


function missingNumber(a, N) {
    let xor1 = 0;
    let xor2 = 0;
  
    for (let i = 0; i < N - 1; i++) {
      xor2 = xor2 ^ a[i]; // XOR of array elements
      xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    }
    xor1 = xor1 ^ N; // XOR up to [1...N]
  
    return xor1 ^ xor2; // the missing number
  }


// 1 xor 1 = 0
// 0 xor n = n



function mmain() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
  }
  
mmain()