

function rotate(array, shift , direction){
    if(dir === 'left'){
    let temparr=[]
    for(let j=1;j<=shift;j++){
        temparr.push(array[j-1])
    }
    for(let i=0;i<array.length-shift;i++){
         array[i]=array[i+shift]
    }
    
    for(let l=1;l<=shift;l++){
        array[array.length-shift-1+l]=temparr[l-1]
    }
}else{
    let temparr=[]
    for(let j=1;j<=shift;j++){
        temparr.push(array[array.length-j])
    } //console.log(temparr)
    for (let i = array.length - 1; i >= shift; i--) {
        array[i] = array[i - shift];
    }
    
    for(let l=1;l<=shift;l++){
        array[l-1]=temparr[temparr.length-l]
    }
}

}






const arr = [1,2,3,4,5,6,7,8];
const d=2
const dir="l"
rotate(arr,d,dir);

console.log("The array after rotating is:"+ arr);