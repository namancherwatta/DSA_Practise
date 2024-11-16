function printTriangle1(rows) {
    for (let i = 1; i <= rows/2; i++) {
        console.log(" ".repeat(rows/2-i) + "*".repeat((2*i-1))+ " ".repeat(rows/2-i) );
}
    for (let i = 1; i <= rows/2; i++) {
        //console.log(" ".repeat(rows/2-i) + "*".repeat((2*i-1))+ " ".repeat(rows/2-i) );
        console.log(" ".repeat(i-1) + "*".repeat(2*rows/2-(2*i-1))+ " ".repeat(i-1) );
    }
  
}

function printTriangle2(rows){
    for(let i=1; i <=(rows/2)+1 ;i++){
        console.log("*".repeat(i))
    }
    for(let i=5; i<=rows;i++){
        console.log(("*").repeat(rows-i))
    }
}

function printTriangle3(rows){
    let start=1
    
    for(let i=0 ;i<rows;i++){
        if(i%2==0){
            start=1
        }else{start=0}
        let str =''
        for(let j=0 ; j<=i;j++){
        str+=start
        start=1-start
    }
        console.log(str)   
    }
}

function printTriangle4(rows){
    for(let i=0 ;i <rows ;i++){
        let str=""
        for(let j =0 ;j<2*rows ; j++){
            if(j<=i ){
                str+=j+1
            }else if( j+1>=2*rows-i){
                str+=2*rows-j
            }
            else{
                str+=" "
            }
        }
        console.log(str)
    }
}

function printTriangle5(rows){
    let count=1
  for(let i=0;i<rows;i++){
    let str=''
    for(j=0;j<=i;j++){
        str+=count + " "
        count++
    }
    console.log(str)
  }
}
function printTriangle7(rows){
    //let A = 65
  for(let i=0;i<rows;i++){
    let A = 65
    let str=''
    for(j=0;j<=i;j++){
        str+=String.fromCharCode(A+j)
        
    }
    console.log(str)
  }
}

function printTriangle8(rows){
    //let A = 65
  for(let i=0;i<rows;i++){
    let A = 65
    let str=''
    for(j=rows-1;j>=i;j--){
        str+=String.fromCharCode(A+rows-j-1)
        
    }
    console.log(str)
  }
}

function printTriangle9(rows){
    for(let i=0;i<rows;i++){
        let str =''
        let A = 64
        for(let j=0;j<rows-i-1;j++){
            str+=' '
        }
        for(let j=0;j<2*i+1;j++){
             if(j<=(2*i+1)/2){
           str+=String.fromCharCode(++A)
            }else{
                str+=String.fromCharCode(--A)   
            }
        }
        for(let j=0;j<rows-i-1;j++){
            str+=' '
        }
        console.log(str)
    }
}

printTriangle9(5);
// let char = 'A'
// console.log(char++)