let num="2222222"

// function largeodd(num){
//     let n=BigInt(num)
//     console.log(n)
//     let max=BigInt(-1)
//     while(n>=1){
//         //console.log(n)
//         if(n % BigInt(2) !=BigInt(0)){
//             return String(n)
//             //max=Math.max(n,max)
          
//         }else{
//            // n=Math.floor(n/10)
           
//         }
//         n=(n/BigInt(10))
//     }
// return ""  
// }

function largeodd(num){
    let n=num.length
    //console.log(num[0])
    //let res=num
    let arr=['1','3','5','7','9']
    while(num){
        //console.log(num[n-1])
    if(arr.includes(num[n-1])){
        console.log(num[n-1])
        return num
    }else{
        //console.log("hii")
        num=num.substring(0,n-1) 
        console.log(num)
        n--
    }

}
return ""
}

console.log(largeodd(num))