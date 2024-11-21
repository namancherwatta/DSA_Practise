function sum(a,b){
    setTimeout(() => {
        console.log(a+b)
    }, 3000);
    
}

function calc(a,b,callback){
    callback(a,b)

}

calc(2,4,sum)
calc(2,6,sum) 
