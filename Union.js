// function findUnion(m,n){
//    let map = new Map()
//    let u=[]

//    for(let ele of m){
//     map.set(ele,true)
//    }

//    for(let ele of n){
//     map.set(ele,true)
//    }

//    for (let num of map.keys()) {
//     u.push(num);
//   }
//  return u
// }


// function findUnion(m, n) {
//   const set = new Set();
//   const u = [];

//   for (let num of m) {
//     set.add(num);
//   }

//   for (let num of n) {
//     set.add(num);
//   }

//   for (let num of set) {
//     u.push(num);
//   }

//   return u;
// }

function findUnion(m,n){
    let u= []
    let i =0, j=0
    while(i<m.length && j<m.length){
      if(m[i]<n[j]){
        if(u[u.length-1] != m[i]){
            u.push(m[i])
            
        }
        i++
      }else if(m[i]>n[j]){
            if(u[u.length-1]!=n[j]){
              u.push(n[j])
            }j++
      }else{
        if(u[u.length-1]!==n[j]){
          u.push(n[j])
        }
        i++
        j++
      }
    }

    while (i < m.length) {
      if (u[u.length - 1] !== m[i]) {
        u.push(m[i]);
      }
      i++;
    }
  
    // Add remaining elements from n if any
    while (j < n.length) {
      if (u[u.length - 1] !== n[j]) {
        u.push(n[j]);
      }
      j++;
    }
return u
}





let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = [2, 3, 4, 4, 5, 11, 12];

let union = findUnion(m, n);

console.log("Union of m and n is:");
console.log(union);